import { render, fireEvent, waitFor, waitForElementToBeRemoved } from '@testing-library/react';
import App from '../App';
import MessageQueue from "../components/MessageQueue"
import Context from "../Context";
import MessageBox from "../components/MessageBox";
import Snackbar from "../components/Snackbar";


const Provider = ({ children, dispatch, messages }) => (
  <Context.Provider 
   value={{ 
     messages, 
     messagesDispatch: dispatch
   }}>
     {children}
   </Context.Provider>
  );

test('renders learn react link', () => {
  const comp = render(<App />);
  expect(comp).toBeTruthy();
});


test("Check if messages are render on their comlumn", () => {
  const dispatch = jest.fn();
  const messages = {
    0: [{id: 1, message: "x"}],
    1: [{id: 2, message: "y"}],
    2: [{id: 3, message: "z"}],
  }
  const Comp = () => <Provider messages={messages} dispatch={dispatch}>
    <MessageQueue type={0} />
    <MessageQueue type={1}/>
    <MessageQueue type={2}/>
  </Provider>

  const { getByText, container } = render(<Comp  />);
  const firstMessage = messages["0"][0].message;
  const message = getByText(firstMessage);
  expect(message).toBeInTheDocument();
});

test("Check if message box onClear works", () => {
  const spy = jest.fn();
  const { getByText, container } = render(<MessageBox 
    onClick={spy}
    color="red"
    message="Test"
  />);

    const clear = getByText(/Clear/i);
    fireEvent.click(clear);
    expect(spy).toHaveBeenCalled();
});


test("Check is snackbar is shown whent error appears", () => {
  const message = "Message";  
  const { getByText} = render(<Snackbar alert="Message" />)
  const el = getByText(message);
  expect(el).toBeInTheDocument();
});

test("Check is snackbar is gone when click on close", async () => {
  const message = "Message";  
  const { getByText } = render(<Snackbar alert="Message" />)
  const button = getByText(/Close/i);
  const el = getByText(message)
  fireEvent.click(button);
  await waitFor(() => {
    expect(el).not.toBeInTheDocument();
  })
  
});

test("Check if message is gone after 2 seconds", async () => {
  const message = "Message";  
  const { getByText} = render(<Snackbar alert="Message" />)
  const el = getByText(message);
  expect(el).toBeInTheDocument();

  waitForElementToBeRemoved(el).then(() => {
    expect(el).not.toBeInTheDocument();

  })

});
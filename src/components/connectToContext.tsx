import { useContext } from "react"
import Context from "../Context";

const connectToContext = (WrappedComponent) => {

    return ({ type, ...props }) => {
        const { messages, ...rest } = useContext(Context);
        return <WrappedComponent messages={messages[type]} {...rest} type={type} {...props} />
    }

}

export default connectToContext;

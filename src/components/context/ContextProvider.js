import React, {useState} from "react";

export const MyContext = React.createContext({ count: 0 });

const ContextProvider = (props) => {
    const [count, setCount] = useState(0);

    return (
        <div className="list">
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <div>
                <MyContext.Provider value={{ count }}>
                    {props.children}
                </MyContext.Provider>
            </div>
            <div>
                <MyContext.Provider value={{ count: count + ' second provider' }}>
                    {props.children}
                </MyContext.Provider>
            </div>

            <div>
                <MyContext.Provider value={{ count: count + ' third provider' }}>
                    <MyContext.Provider value={{ count: count + ' third inner provider' }}>
                        {props.children}
                    </MyContext.Provider>
                </MyContext.Provider>
            </div>
        </div>

    )
};

export default ContextProvider;
import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import App from "../App";
import Signup from "../comonets/Signup";

jest.mock("react-router-dom",()=>{
    return{
        useNavigate: ()=>jest.fn()
    }
})

describe('signup component test',()=>{
    test('snap shot',()=>{
        const tree = render(
            <Signup/>
        );
        expect(tree).toMatchSnapshot();
        screen.debug()
    });
    test('test for componet',()=>{
        const tree = render(
            <Signup/>
        );
       expect(screen.getByRole('textbox')).toBeInTheDocument();
       expect(screen.getAllByRole('radio').length).toBe(5);
       const btn = screen.getByRole('button');

       fireEvent.change(screen.getByRole('textbox'),{target:{value:'test'}})

       fireEvent.click(screen.getByTestId('gender1'))
       fireEvent.click(screen.getByTestId('gender2'))
       fireEvent.click(screen.getByTestId('gender3'))

       fireEvent.click(screen.getByTestId('english'))
       fireEvent.click(screen.getByTestId('hindi'))
       

       fireEvent.click(btn)
    });
    
})
import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import App from "../App";
import Que from "../comonets/Que";
import Signup from "../comonets/Signup";

jest.mock("react-router-dom",()=>{
    return{
        useNavigate: ()=>jest.fn(),
        useLocation:()=>{
            return{
                state:'english'
            }
        }
    }
})

describe('Question component test',()=>{
    test('snap shot',()=>{
        const tree = render(
            <Que/>
        );
        expect(tree).toMatchSnapshot();
        screen.debug()
    });
    test('test for componet',()=>{
        const tree = render(
            <Que/>
        );

        const frd = screen.getByTestId('frd')
        fireEvent.click(screen.getByTestId('mcq-0'));
        fireEvent.click(frd)

        fireEvent.click(screen.getByTestId('bool-0'));
        fireEvent.click(frd)

        fireEvent.click(screen.getByTestId('match-0'));
        fireEvent.click(frd)

        fireEvent.click(screen.getByTestId('multi-0'));
        fireEvent.click(frd)

        expect(screen.getByTestId('fill')).toBeInTheDocument()
        // fireEvent.change(screen.getByTestId('fill'),{target:{value:''}});
        fireEvent.click(frd)

        fireEvent.click(screen.getByTestId('back'));
        fireEvent.click(screen.getByTestId('btn-0'));
        fireEvent.click(frd)
        fireEvent.click(screen.getByTestId('submit'))
       
    });
    
})
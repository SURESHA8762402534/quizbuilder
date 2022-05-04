import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import App from "../App";
import Que from "../comonets/Que";
import Result from "../comonets/Result";
import Signup from "../comonets/Signup";
import { questions } from "../questions";

jest.mock("react-router-dom",()=>{
    return{
        
        useLocation:()=>{
            return{
                state:[
                    {
                        id:1,
                        type:'mcq',
                        que:'what is React?',
                        opt:[
                            'librery',
                            'framework',
                            'both',
                            'none'
                        ],
                        ans:'librery',
                        userAns:'',
                        isAnsd:false
                    },
                    {
                        id:2,
                        type:'fill',
                        que:'React is built by ____',
                       
                        ans:'facebook',
                        userAns:'',
                        isAnsd:false
                    },
                    {
                        id:3,
                        type:'bool',
                        que:'React is a librery',
                        opt:[
                            'true',
                            'false'
                            
                        ],
                        ans:'true',
                        userAns:'',
                        isAnsd:false
                    },
                    {
                        id:4,
                        type:'match',
                        que:'match the following',
                        match:[
                            '1)React - a)Framework',
                            '2)Angular - b)state management tool',
                            '3)Redux - c)Librery'
                            
                        ],
                        opt:[
                            '1-a,2-b,3-c',
                            '1-c,2-b,3-a',
                            '1-c,2-a,3-b',
                            'none'
                        ],
                        ans:'1-c,2-a,3-b',
                        userAns:'',
                        isAnsd:false
                    },
                    {
                        id:5,
                        type:'multi',
                        que:'React',
                        opt:[
                            'librery',
                            'framework',
                            'uses jsx',
                            'none'
                        ],
                        ans:['librery','uses jsx'],
                        userAns:[],
                        isAnsd:false
                    },
                ]
            }
        }
    }
})

describe('result component test',()=>{
    test('snap shot',()=>{
        const tree = render(
            <Result/>
        );
        expect(tree).toMatchSnapshot();
        screen.debug()
    });
    test('test for componet',()=>{
        const tree = render(
            <Result/>
        );

        expect(screen.getByTestId('piechart')).toBeInTheDocument()
        expect(screen.getByTestId('piechart')).toHaveStyle('borderRadius:50%')
       
    });
    
})
import Nav from "./Nav";
import {createData} from '../services/auth'


export default function Home(){
    createData();
    return (
        <>
            <Nav></Nav>
        </>
    );
}
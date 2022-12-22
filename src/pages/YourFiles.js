import PageLayout from "../components/PageLayout";
import {useState} from "react";
import Item from "../components/Item";


const YourFiles = (props) => {
    //TODO set state with null
    const [files, setFiles] = useState(
        [{name: 'folder1', type: 'folder'},
            {name: 'file1', type: 'file'}, [{name: 'folder2', type: 'folder'}, {
            name: 'folder3',
            type: 'folder'
        }, [{name: 'folder4', type: 'folder'}, {name: 'folder6', type: 'file'}]]]
    );

    const fetchData = () => {

    }

    const organizeFoldersAndFiles = () => {
        files.map((item) => {
            <Item name={item.name} type={item.type}/>
        })
    }

    const content = <div>Hello</div>
    return (<PageLayout pageContent={content}/>)
}

export default YourFiles;





import * as React from 'react';
import { shallow } from 'enzyme';
import { TodoLists } from './TodoLists';
import { TestMaterialUi } from './TestMaterialUi';

describe('<testest>',()=>{
    it("renders the heading", () => {
        const props = {

        }
        const wrapper = shallow(<TodoLists {...props}/>);
    })
})

import React, { useState } from 'react';
import MySelect from './MySelect';
import '../header/Header.css'
import { useActions } from '../hooks/useActions';

const SelectList = ({setActive}:any) => {
    const { selectedSortId, selectedSortName} = useActions()
    const [selectedSort, setSelectedSort] = useState('')

    const sortZadachi = (sort: React.SetStateAction<string>) => {
        setSelectedSort(sort);
        if (sort === 'id'){
           selectedSortId()
        } else {
           selectedSortName()
        }
     } 

    return (
        <div className="bth">
                <MySelect                      
                    value={selectedSort}
                    onChange={sortZadachi}
                    defaultValue='Сортировка'
                    options={[
                        {value: 'title', name: 'Названию'},
                        {value: 'id', name: 'Номеру'},
                    ]}
                />
                <button onClick={() => setActive(true)}>добавить</button>
            </div>
    );
};

export default SelectList;
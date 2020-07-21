import React,{ createContext, useState, useEffect } from 'react';
import axios from 'axios';
import { peopleResultFind } from './people.utill';

// 0. 数据类型登记
export const PeopleContext = createContext({
    peopleDate: null,
    peopleDateResult: [],
    isFetching: true,
    errorMsg: null,
    getPeopleDate: ()=>{},
    getPeopleItem: ()=>{},
});

// 1. 构建Provider
const PeopleProvider = ({children}) => {
    const [peopleDate,setPeopleDate] = useState(null);
    const [peopleDateResult,setPeopleDataResult] = useState([]);
    const [isFetching,setIsFetching] = useState(true);
    const [errorMsg,setErrorMsg] = useState(null);

    const getPeopleDate = async () => {
        try{
            const peopleDate = await axios("https://swapi.py4e.com/api/people/");
            setPeopleDate(peopleDate.data);
            setPeopleDataResult(peopleDate.data.results);
            setIsFetching(false);
        }catch(err){
            setErrorMsg(err);
        }
    }

    const getPeopleItem = peopleResultFind;

    useEffect(()=>{
        if(!peopleDate){
            getPeopleDate();            
        }
    },[peopleDate]);

    //  导出
    return(
        <PeopleContext.Provider value={{
            peopleDate,
            peopleDateResult,
            isFetching,
            errorMsg,
            getPeopleDate,
            getPeopleItem,
        }} >
            {children}
        </PeopleContext.Provider>
    );

};

export default PeopleProvider;
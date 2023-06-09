import React, {useState} from 'react';

type PropsType = {
    title: any
}
export const Input = (props: PropsType) => {
const onChangeHandler=(e:React.ChangeEvent<HTMLInputElement>)=> {

}

    return (
        <input ref={props.title} />
    );
};
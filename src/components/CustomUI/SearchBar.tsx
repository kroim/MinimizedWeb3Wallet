import React from 'react'
import styled from 'styled-components'
import SearchSvg from '../../assets/svg/icon_search.svg'
import CloseSvg from '../../assets/svg/icon_close.svg'

// Header SearchBar

const SearchBar = styled.div`
    display: flex;
    width: 100%;
`
const SearchForm = styled.form`
    padding: 0.5rem;
    display: block;
    width: 100%;
`
const SearchDiv = styled.div`
    position: relative;
    width: 100%;
`
const SearchIcon = styled.span`
    position: absolute;
    z-index: 10;
    padding: 7px;
    cursor: pointer;
`

const SearchInput = styled.input`
    border: none;
    height: 38px;
    width: 100%;
    padding-left: 38px;
    padding-right: 20px;
    background-color: white;
    box-shadow: none;
    border-radius: 5px;
    display: block;
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 1.5;
    color: #495057;
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    &:focus {
        outline: none;
    }
`

export const HeaderSearchBar = () => {
    return (
        <SearchBar>
            <SearchForm>
                <SearchDiv>
                    <SearchIcon>
                        <img src={SearchSvg} width={24} alt={'Search Icon'}/>
                    </SearchIcon>
                    <SearchInput placeholder={'Search Items ...'} />
                    <SearchIcon style={{right: 0, top: 0, padding: 9}}>
                        <img src={CloseSvg} height={12} alt={'Close Icon'} />
                    </SearchIcon>
                </SearchDiv>
            </SearchForm>
        </SearchBar>
    )
}

export const BottomSearchBar = () => {
    return (
        <SearchBar></SearchBar>
    )
}
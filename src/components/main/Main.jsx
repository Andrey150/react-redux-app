import React, {useEffect, useState} from 'react';
import './main.less'
import {useDispatch, useSelector} from "react-redux";
import {getRepos} from "../action/repos";
import Repo from "./repo/Repo";
import {setCurrentPage} from "../../reducers/reposReducer";
import {createPages} from '../../utils/pagesCreator';
import {useNavigate} from "react-router";
import Error from "../error";

const Main = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const repos = useSelector(state => state.repos.items);
  const totalCount = useSelector(state => state.repos.totalCount);
  const currentPage = useSelector(state => state.repos.currentPage);
  const perPage = useSelector(state => state.repos.perPage);
  const isFetching = useSelector(state => state.repos.isFetching);
  const isFetchingError = useSelector(state => state.repos.isFetchingError);
  const [searchValue, setSearchValue] = useState('');
  const pagesCount = Math.ceil(totalCount / perPage);
  const pages = []

  createPages(pages, pagesCount, currentPage)

  useEffect(() => {
    dispatch(getRepos( searchValue, currentPage, perPage ))
  }, [currentPage])

  function searchHandler(){
    dispatch(setCurrentPage(1))
    dispatch(getRepos(searchValue, currentPage, perPage))
  }
  if (isFetchingError) {
    return <Error/>
  }

  return (
    <div>
      <div className="search">
        <input value={searchValue} onChange={(e) => setSearchValue(e.target.value)} type="text"  placeholder='Input repo name' className="search-input"/>
        <button onClick={()=> searchHandler()} className="search-btn">Search</button>
      </div>
      {
        isFetching === false ?
        repos.map((repo => <Repo key={repo.id} repo={repo}/>))
          :
        <div className='fetching'/>
      }
      <div className="pages">
        {pages.map((page, index ) => <span
          key={index}
          className={currentPage == page ? 'current-page' : 'page'}
          onClick={() => dispatch(setCurrentPage(page))}
        >{page}</span>)}
      </div>
    </div>
  );
};

export default Main;
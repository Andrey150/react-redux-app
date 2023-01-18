import React, {useEffect, useState} from 'react';
import {useNavigate} from "react-router";
import {useParams} from "react-router-dom";
import {getCurrentRepo, getContributors} from "../action/repos";


const Card = (props) => {
  const navigate = useNavigate();
  const {username, reponame} = useParams();
  const [repo, setRepo] = useState({owner:{}})
  const [contributors, setContributors] = useState([])

  useEffect(() => {
    getCurrentRepo(username, reponame, setRepo)
    getContributors(username, reponame, setContributors)
  }, [])

  return (
    <div>
      <button onClick={() => navigate(-1)}>go back</button>
      <div className="card">
        <img src={repo.owner.avatar_url} alt=""/>
        <div className="name">{repo.name}</div>
        <div className="stars">Количество звезд: {repo.stargazers_count}</div>
      </div>
      {/*{contributors.map(contr, index =>*/}
      {/*  <>*/}
      {/*  <div>{index + 1}. {contr}</div>*/}
      {/*    {console.log(contr)}*/}
      {/*  </>*/}
      {/*)}*/}
    </div>
  );
};

export default Card;
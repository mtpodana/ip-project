import { useState } from "react";
import classNames from "classnames/bind";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
import PriorityHighRoundedIcon from '@mui/icons-material/PriorityHighRounded';
import BookmarkRoundedIcon from '@mui/icons-material/BookmarkRounded';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';

import styles from "./Action.module.scss";
import Button from "@mui/material/Button";
// import Search from "./Search/index";

const cx = classNames.bind(styles);

const Action: React.FC<any> = () => {
    const[request,setRequest] =useState(false);
    const handleClick = () => {
        setRequest(!request);
    };
  return (
    <div className={cx("wrapper")}>
      <div className={cx("btn")}>
        <Button variant="contained" sx={{width:'18%',height:'35px',backgroundColor:'#1C8CF6'}}>
        <AddRoundedIcon sx={{fontSize:25}} /> <p>Create new</p>
        </Button>
        <Button variant="contained" sx={{width:'18%', marginLeft:'10px',height:'35px',backgroundColor:'#1C8CF6'}}>
        <DeleteRoundedIcon sx={{fontSize:25}} /> <p>Recycle</p>
        </Button>
        <Button variant="contained" sx={{width:'18%',marginLeft:'10px',height:'35px',backgroundColor:'#1C8CF6'}} onClick={handleClick}>
        <PriorityHighRoundedIcon sx={{fontSize:25}} /> 
        <p>Approve Ip</p>
        {request && <div className={cx("bookmark")}>
             <BookmarkRoundedIcon sx={{color:'red',height:'50px',width:'25px'}}/>
             <p>7</p>
        </div>}
        </Button>
      </div>
      
      <div className={cx("search")}>
        <input type="search" placeholder="Search by Ip address"></input>
        <SearchRoundedIcon className={cx("search_icon")}/>
      </div>
    </div>
  );
};

export default Action;

import NoticeCategoryItem from 'components/NoticeCategoryItem/NoticeCategoryItem';
import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
// import { useSelector } from 'react-redux';
import // selectNotices,
// selectVisibleNotices,
'redux/notices/noticesSelectors';
// import { createAsyncThunk } from "@reduxjs/toolkit";
const NoticesCategoriesList = () => {
  // const notices = useSelector(selectVisibleNotices);
  // console.log(notices);

  // const fetchTasks = createAsyncThunk("notices/fetchAll", async () => {
  // const response = await axios.get("/notices");
  //   return response.data;
  //   console.log(response.data);
  // });

  const [noticesList, setNoticesList] = useState([]);

  useEffect(() => {
    const controller = new AbortController();

    const fetchNotices = async () => {
      const response = await axios.get('/notices');

      await setNoticesList([...response.data]);

      // return response.data;
    };

    fetchNotices();
    // console.log(noticesList);

    return () => {
      controller.abort();
    };
  }, []);

  return (
    <>
      <NoticeCategoryItem noticesListInfo={noticesList}></NoticeCategoryItem>
    </>
  );
};

export default NoticesCategoriesList;

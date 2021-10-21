//* CSS *//
import './App.scss';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

//* Everything else *//
import { useState, useEffect } from 'react';
import Loader from "react-loader-spinner";

import { Searchbar } from './components/Searchbar'
import ImagesGallery from './components/ImagesGallery'
import {Button} from './components/Button'

import { FetchPhotos } from './searchService';
import { Modal } from './components/Modal';
import { searchBigImg } from './searchBigImg'

export default function App() {
    const [data, setData] = useState([])
    const [page, setPage] = useState(1)
    const [query, setQuery] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const [modalIsOpen, setModalIsOpen] = useState(false)
    const [bigImgUrl, setBigImgUrl] = useState('')

    useEffect(async() => {
        setIsLoading(true)
        let foundData;
        await FetchPhotos(query, page).then((data) => {foundData = data})
        setData(foundData)
        setIsLoading(false)
        document.addEventListener("keydown", closeModal)
        document.querySelector(".ImageGallery").addEventListener("click", openModal)
    }, [])

    const addImages = (arrData) => {
        setData(arrData)
    }

    const loadMore = async (moreData) => {
        setData([...data, ...moreData])
        window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: 'smooth',
        });
    }

    const annulePage = async(initialPage) => {
        await setPage(initialPage)
    }

    const pageCount = async(pageNumber) => {
        await setPage(pageNumber)
    }

    const thisIsLoading = (isLoading) => {
        setIsLoading(isLoading)
    }

    const openModal = async(e) => {
        await setModalIsOpen(true)
        await searchBigImg(e.target.id).then((bigImgUrl) => { setBigImgUrl(bigImgUrl) })
    }

    const closeModal = (e) => {
        if (modalIsOpen === false) {
            return
        }
        if (e.keyCode === 27) {
            setModalIsOpen(false)
            setBigImgUrl('')
        }
    }

    const closeModalOverlay = (modalIsOpen) => {
        setModalIsOpen(modalIsOpen)
        setBigImgUrl('')
    }

    const style = {
      position: "fixed",
      top: "50%",
      left: "35%",
    }

    return (
        <>
        {modalIsOpen ? <Modal imgUrl={bigImgUrl} closeModalOverlay={closeModalOverlay}/> : null}
        <Searchbar addImages={addImages} loadMore={loadMore} givenPage={page} annulePage={annulePage} isLoading={thisIsLoading}/>
        {isLoading ? <Loader className="loader" type="ThreeDots" width="500px" color="#00BFFF" style={style} /> : null}
        <ImagesGallery data={data}/>
        <Button pageCount={pageCount} givenPage={ page }/>
      </>
    )
}
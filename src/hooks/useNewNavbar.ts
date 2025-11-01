import React from "react";
import useGithub from "@/hooks/useGithub";
import useGoogle from '../hooks/useGoogle';
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { setOpenProfile, setClosePorfile } from '../Redux/Reducers'
import { useNavigate } from "react-router-dom";
import { useDisclosure } from "@heroui/react";
import { RootState } from "@/types/interface";

export default function useNewNavbar() {
    const state = useSelector((state: RootState) => state.Data)
    const dispatch = useDispatch()
    const { GoogleLogout } = useGoogle();
    const { signOut } = useGithub();
    const nevigate = useNavigate();
    function opeingprofiletab(value: any) {
        if (value) {
            dispatch(setOpenProfile())
        }
        else {
            dispatch(setClosePorfile())
        }
    }
    useEffect(() => {
        console.log("state=>", state)
    }, [state, opeingprofiletab])
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [backdrop, setBackdrop] = React.useState("opaque");

    const handleOpen = (backdrop: any) => {
        setBackdrop(backdrop);
        onOpen();
        dispatch(setOpenProfile())
        document?.getElementById('search_bar_list')?.classList.add('active');
        document.body.classList.add('scroll-hide');
    };

    return {
        dispatch, setClosePorfile, state, isMenuOpen,
        setBackdrop, setIsMenuOpen, isOpen, onClose,
        backdrop, handleOpen, GoogleLogout, signOut,
        nevigate, opeingprofiletab
    };
}
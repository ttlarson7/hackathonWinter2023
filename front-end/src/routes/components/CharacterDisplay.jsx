import React, {useEffect, useState} from "react";
import {useAuth} from "@clerk/clerk-react";
import DragonBornImage from "../../assets/dragonborn.png";
import ElfImage from "../../assets/elf.png";
import GoblinImage from "../../assets/goblin.png";
import HumanImage from "../../assets/human.png";
import OrcImage from "../../assets/halforc.png";
import HalfElfImage from "../../assets/halfelf.png";
import HalflingImage from "../../assets/halfling.png";
import TieflingImage from "../../assets/tiefling.png";
import DwarfImage from "../../assets/dwarf.png";
import GnomeImage from "../../assets/gnome.png";
import Default from "../../assets/default.jpg";

export default function CharacterDisplay({ id }) {
    const { getToken } = useAuth();

    const [characterData, setCharacterData] = useState(null);
    useEffect(() => {
        const getCharacter = async () => {
            try {
                const response = await fetch('/api/characters/' + id, {
                    method: 'GET',
                    headers: {
                        'content-type': 'application/json',
                        Authorization: `Bearer ${await getToken()}`
                    }
                });
                const data = await response.json();
                setCharacterData(data);
            } catch (error) {
                console.error('Error fetching character:', error);
            }
        };

        getCharacter();
    }, [id, getToken])

    if (!characterData) {
        return <div>Loading...</div>
    }

    const { name, class: characterClass, race, subrace, background, alignment, languages, description, stats, abilities } = characterData;
    const [ strength, dexterity, constitution, intelligence, wisdom, charisma ] = stats;

    const getUrl = () => {
        let imageUrl;

        switch (race) {
            case "DragonBorn":
                imageUrl = DragonBornImage;
                break
            case "Elf":
                imageUrl = ElfImage;
                break;
            case "Goblin":
                imageUrl = GoblinImage;
                break;
            case "Human":
                imageUrl = HumanImage;
                break;
            case "Orc":
                imageUrl = OrcImage;
                break;
            case "Half-Elf":
                imageUrl = HalfElfImage;
                break;
            case "Halfling":
                imageUrl = HalflingImage;
                break;
            case "Tiefling":
                imageUrl = TieflingImage;
                break;
            case "Dwarf":
                imageUrl = DwarfImage;
                break;
            case "Gnome":
                imageUrl = GnomeImage;
                break;
            default:
                imageUrl = Default;
        }

        return imageUrl;
    }
    const url = getUrl();

    return (
        <div className="text-white">
            <div className="flex flex-row justify-center">
                <div
                    className="flex-grow max-w-[400px] m-10 p-5 space-y-1 bg-gray-100 rounded-lg overflow-hidden shadow-lg text-black">
                    <div className="col-span-12 sm:col-span-6 md:col-span-3">
                        <div className="flex flex-row bg-white shadow-sm rounded p-4">
                            <div
                                className="flex items-center justify-center flex-shrink-0 h-12 w-12 rounded-xl bg-blue-100 text-blue-500">
                                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                                    <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                                    <g id="SVGRepo_iconCarrier">
                                        <path
                                            d="M21 20L20 21M20 21H4M20 21L17.1034 13.3964C16.6937 12.321 16.4889 11.7834 16.3899 11.2284C16.302 10.7358 16.276 10.2343 16.3126 9.73528C16.3539 9.17302 16.5021 8.61708 16.7986 7.50524L18 3L12.0468 6.30735C10.9184 6.93421 10.3542 7.24764 9.8796 7.66063C9.45855 8.02699 9.09068 8.45031 8.78663 8.91834C8.44387 9.44594 8.21219 10.0483 7.74882 11.2531L4 21M4 21L3 20M14 16C14 17.1046 13.1046 18 12 18C10.8954 18 10 17.1046 10 16M14 16C14 14.8954 13.1046 14 12 14C10.8954 14 10 14.8954 10 16M14 16H18M10 16H6"
                                            stroke="#ffffff" strokeWidth="2" strokeLinecap="round"
                                            strokeLinejoin="round"></path>
                                    </g>
                                </svg>
                            </div>
                            <div className="flex flex-col flex-grow ml-4">
                                <div className="text-sm text-gray-500">Class</div>
                                <div className="font-bold text-lg">{characterClass}</div>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-12 sm:col-span-6 md:col-span-3">
                        <div className="flex flex-row bg-white shadow-sm rounded p-4">
                            <div
                                className="flex items-center justify-center flex-shrink-0 h-12 w-12 rounded-xl bg-blue-100 text-blue-500">
                                <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" fill="#000000">
                                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                                    <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                                    <g id="SVGRepo_iconCarrier">
                                        <path fill="#ffffff"
                                              d="M256 51c-1.216 1.157-3.235 3.694-5.595 7.47-4.552 7.283-10.594 19.233-18.383 34.8v9.94c6.19 4.752 14.906 7.626 23.978 7.626 9.072 0 17.787-2.874 23.978-7.627v-9.94c-7.79-15.567-13.83-27.517-18.383-34.8-2.36-3.776-4.38-6.313-5.595-7.47zm-42.743 54.286c-28.17 6.895-55.87 20.62-82.175 41.132-16.04 80.706-31.2 175.83-16.89 254.565 6.188 2.322 12.687 4.44 19.403 6.398l-3.062-12.257-4.305-6.455 7.807-5.204c6.304-4.203 13.54-7.85 21.487-10.99-5.028-6.777-8.326-15.44-11.545-24.286-5.46-15.013-9.66-31.84-13.654-44.028l-9.792-29.87 24.565 19.616c24.47 19.543 49.132 32.704 82.918 56.314l10.07 7.037c5.944-.26 11.928-.39 17.917-.39 5.99 0 11.973.13 17.916.39l10.07-7.037c33.787-23.61 58.45-36.77 82.92-56.314l24.563-19.616-9.793 29.87c-3.995 12.19-8.193 29.015-13.654 44.028-3.22 8.847-6.517 17.51-11.545 24.287 7.948 3.138 15.183 6.786 21.487 10.99l7.807 5.203-4.305 6.455-3.062 12.258c6.716-1.956 13.215-4.075 19.402-6.397 14.31-78.736-.85-173.86-16.89-254.565-26.305-20.51-54.004-34.237-82.174-41.132v6.31l-2.75 2.746c-10.55 10.552-25.398 15.26-39.993 15.26-14.595 0-29.442-4.708-39.994-15.26l-2.75-2.746v-6.31zm75.98 55.876l13.39 13.145-6.572 6.695c-12.91 13.147-27.168 19.604-41.277 18.865-14.108-.74-26.793-8.077-38.39-18.442l-6.995-6.253 12.504-13.99 6.996 6.25c9.774 8.735 18.788 13.273 26.867 13.696 8.08.423 16.495-2.67 26.905-13.272l6.573-6.694zm-149.998 3.885c19.807 0 41.364 9.12 60.852 19.946 19.487 10.826 36.416 23.397 45.862 32.843l-13.268 13.267c-7.234-7.234-23.665-19.683-41.708-29.707-18.043-10.024-38.186-17.584-51.74-17.584v-18.765zm233.52 0v18.765c-13.552 0-33.695 7.56-51.738 17.584-18.043 10.024-34.474 22.473-41.708 29.707l-13.268-13.267c9.446-9.446 26.375-22.017 45.862-32.843 19.488-10.827 41.045-19.946 60.853-19.946zm-226.887 36.11c16.68 16.68 47.577 47.29 93.447 47.29v.316l16.757-24.214 16.603 24.475v-.578c45.87 0 76.767-30.61 93.447-47.29l13.268 13.266c-8.234 8.233-21.14 21.197-38.61 32.218 4.916 4.755 7.998 11.397 7.998 18.697 0 14.283-11.78 26.063-26.063 26.063-14.282 0-26.062-11.78-26.062-26.063 0-.183.01-.364.014-.546-3.9.798-7.922 1.415-12.06 1.828l28.074 41.386-3.79 5.315c-7.152 10.026-16.657 15.68-26.033 18.204-9.376 2.525-18.523 2.41-26.863 2.41s-17.496.107-26.944-2.4-19.065-8.05-26.67-17.95l-4.17-5.425 28.773-41.58c-4-.41-7.887-1.017-11.662-1.79.004.183.014.364.014.547 0 14.283-11.78 26.063-26.062 26.063-14.283 0-26.063-11.78-26.063-26.063 0-7.3 3.082-13.942 7.998-18.696-17.47-11.02-30.376-23.984-38.61-32.217l13.268-13.267zm-128.076 16.11c2.95 6.932 8.367 15.73 16.54 27.413 12.455 17.8 29.556 41.635 46.575 75.674 1.848 3.697 4.587 6.08 8.64 7.774.07-13.807.677-27.726 1.7-41.656l-24.876-21.55 12.286-14.184 14.638 12.68c.938-9.016 2.026-18.007 3.23-26.948-7.94-6.23-17.723-10.416-28.564-13.373-16.628-4.535-34.943-5.58-50.17-5.83zm476.406 0c-15.226.25-33.54 1.295-50.17 5.83-10.84 2.957-20.623 7.142-28.562 13.373 1.204 8.94 2.292 17.932 3.23 26.947l14.638-12.68 12.286 14.185-24.875 21.55c1.02 13.93 1.628 27.848 1.7 41.656 4.05-1.694 6.79-4.077 8.638-7.774 17.02-34.04 34.12-57.873 46.575-75.674 8.173-11.682 13.59-20.48 16.54-27.412zm-238.28 40.48L221.81 307.04c3.74 3.347 7.608 5.175 12.06 6.356 6.265 1.663 13.79 1.772 22.13 1.772s15.874-.117 21.982-1.762c4.345-1.17 8.01-2.94 11.476-6.216l-33.535-49.442zm-66.643.292c-4.142 0-7.298 3.155-7.298 7.297 0 4.14 3.156 7.297 7.298 7.297 4.14 0 7.297-3.156 7.297-7.297 0-4.142-3.156-7.298-7.297-7.298zm133.44 0c-4.14 0-7.297 3.155-7.297 7.297 0 4.14 3.156 7.297 7.297 7.297 4.142 0 7.298-3.156 7.298-7.297 0-4.142-3.156-7.298-7.298-7.298zm-166.322 67.34c1.684 5.604 3.355 11.28 5.214 16.392 4.053 11.14 9.25 19.18 12.498 22.424l27.458-9.153c-16.38-10.857-31.114-20.08-45.17-29.662zm199.204 0c-14.056 9.583-28.79 18.806-45.17 29.663l27.458 9.153c3.247-3.245 8.445-11.283 12.498-22.424 1.86-5.112 3.53-10.788 5.214-16.39zM256 375.634c-41.212 0-82.64 7.558-105.97 20.12l13.58 54.32c61.668 14.57 123.112 14.57 184.78 0l13.58-54.32c-23.33-12.562-64.758-20.12-105.97-20.12zm-.018 10.543c23.4-.08 46.826 4.167 70.074 13.005l8.77 3.334-6.67 17.542-8.77-3.336c-42.466-16.144-84.223-15.572-126.88.04l-8.814 3.226-6.448-17.623 8.81-3.223c23.152-8.473 46.527-12.883 69.928-12.964z"></path>
                                    </g>
                                </svg>
                            </div>
                            <div className="flex flex-col flex-grow ml-4">
                                <div className="text-sm text-gray-500">Race</div>
                                <div className="font-bold text-lg">{race}</div>
                            </div>
                        </div>
                    </div>
                    {subrace && <div className="col-span-12 sm:col-span-6 md:col-span-3">
                        <div className="flex flex-row bg-white shadow-sm rounded p-4">
                            <div
                                className="flex items-center justify-center flex-shrink-0 h-12 w-12 rounded-xl bg-blue-100 text-blue-500">
                                <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" fill="#000000">
                                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                                    <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                                    <g id="SVGRepo_iconCarrier">
                                        <path fill="#ffffff"
                                              d="M256 51c-1.216 1.157-3.235 3.694-5.595 7.47-4.552 7.283-10.594 19.233-18.383 34.8v9.94c6.19 4.752 14.906 7.626 23.978 7.626 9.072 0 17.787-2.874 23.978-7.627v-9.94c-7.79-15.567-13.83-27.517-18.383-34.8-2.36-3.776-4.38-6.313-5.595-7.47zm-42.743 54.286c-28.17 6.895-55.87 20.62-82.175 41.132-16.04 80.706-31.2 175.83-16.89 254.565 6.188 2.322 12.687 4.44 19.403 6.398l-3.062-12.257-4.305-6.455 7.807-5.204c6.304-4.203 13.54-7.85 21.487-10.99-5.028-6.777-8.326-15.44-11.545-24.286-5.46-15.013-9.66-31.84-13.654-44.028l-9.792-29.87 24.565 19.616c24.47 19.543 49.132 32.704 82.918 56.314l10.07 7.037c5.944-.26 11.928-.39 17.917-.39 5.99 0 11.973.13 17.916.39l10.07-7.037c33.787-23.61 58.45-36.77 82.92-56.314l24.563-19.616-9.793 29.87c-3.995 12.19-8.193 29.015-13.654 44.028-3.22 8.847-6.517 17.51-11.545 24.287 7.948 3.138 15.183 6.786 21.487 10.99l7.807 5.203-4.305 6.455-3.062 12.258c6.716-1.956 13.215-4.075 19.402-6.397 14.31-78.736-.85-173.86-16.89-254.565-26.305-20.51-54.004-34.237-82.174-41.132v6.31l-2.75 2.746c-10.55 10.552-25.398 15.26-39.993 15.26-14.595 0-29.442-4.708-39.994-15.26l-2.75-2.746v-6.31zm75.98 55.876l13.39 13.145-6.572 6.695c-12.91 13.147-27.168 19.604-41.277 18.865-14.108-.74-26.793-8.077-38.39-18.442l-6.995-6.253 12.504-13.99 6.996 6.25c9.774 8.735 18.788 13.273 26.867 13.696 8.08.423 16.495-2.67 26.905-13.272l6.573-6.694zm-149.998 3.885c19.807 0 41.364 9.12 60.852 19.946 19.487 10.826 36.416 23.397 45.862 32.843l-13.268 13.267c-7.234-7.234-23.665-19.683-41.708-29.707-18.043-10.024-38.186-17.584-51.74-17.584v-18.765zm233.52 0v18.765c-13.552 0-33.695 7.56-51.738 17.584-18.043 10.024-34.474 22.473-41.708 29.707l-13.268-13.267c9.446-9.446 26.375-22.017 45.862-32.843 19.488-10.827 41.045-19.946 60.853-19.946zm-226.887 36.11c16.68 16.68 47.577 47.29 93.447 47.29v.316l16.757-24.214 16.603 24.475v-.578c45.87 0 76.767-30.61 93.447-47.29l13.268 13.266c-8.234 8.233-21.14 21.197-38.61 32.218 4.916 4.755 7.998 11.397 7.998 18.697 0 14.283-11.78 26.063-26.063 26.063-14.282 0-26.062-11.78-26.062-26.063 0-.183.01-.364.014-.546-3.9.798-7.922 1.415-12.06 1.828l28.074 41.386-3.79 5.315c-7.152 10.026-16.657 15.68-26.033 18.204-9.376 2.525-18.523 2.41-26.863 2.41s-17.496.107-26.944-2.4-19.065-8.05-26.67-17.95l-4.17-5.425 28.773-41.58c-4-.41-7.887-1.017-11.662-1.79.004.183.014.364.014.547 0 14.283-11.78 26.063-26.062 26.063-14.283 0-26.063-11.78-26.063-26.063 0-7.3 3.082-13.942 7.998-18.696-17.47-11.02-30.376-23.984-38.61-32.217l13.268-13.267zm-128.076 16.11c2.95 6.932 8.367 15.73 16.54 27.413 12.455 17.8 29.556 41.635 46.575 75.674 1.848 3.697 4.587 6.08 8.64 7.774.07-13.807.677-27.726 1.7-41.656l-24.876-21.55 12.286-14.184 14.638 12.68c.938-9.016 2.026-18.007 3.23-26.948-7.94-6.23-17.723-10.416-28.564-13.373-16.628-4.535-34.943-5.58-50.17-5.83zm476.406 0c-15.226.25-33.54 1.295-50.17 5.83-10.84 2.957-20.623 7.142-28.562 13.373 1.204 8.94 2.292 17.932 3.23 26.947l14.638-12.68 12.286 14.185-24.875 21.55c1.02 13.93 1.628 27.848 1.7 41.656 4.05-1.694 6.79-4.077 8.638-7.774 17.02-34.04 34.12-57.873 46.575-75.674 8.173-11.682 13.59-20.48 16.54-27.412zm-238.28 40.48L221.81 307.04c3.74 3.347 7.608 5.175 12.06 6.356 6.265 1.663 13.79 1.772 22.13 1.772s15.874-.117 21.982-1.762c4.345-1.17 8.01-2.94 11.476-6.216l-33.535-49.442zm-66.643.292c-4.142 0-7.298 3.155-7.298 7.297 0 4.14 3.156 7.297 7.298 7.297 4.14 0 7.297-3.156 7.297-7.297 0-4.142-3.156-7.298-7.297-7.298zm133.44 0c-4.14 0-7.297 3.155-7.297 7.297 0 4.14 3.156 7.297 7.297 7.297 4.142 0 7.298-3.156 7.298-7.297 0-4.142-3.156-7.298-7.298-7.298zm-166.322 67.34c1.684 5.604 3.355 11.28 5.214 16.392 4.053 11.14 9.25 19.18 12.498 22.424l27.458-9.153c-16.38-10.857-31.114-20.08-45.17-29.662zm199.204 0c-14.056 9.583-28.79 18.806-45.17 29.663l27.458 9.153c3.247-3.245 8.445-11.283 12.498-22.424 1.86-5.112 3.53-10.788 5.214-16.39zM256 375.634c-41.212 0-82.64 7.558-105.97 20.12l13.58 54.32c61.668 14.57 123.112 14.57 184.78 0l13.58-54.32c-23.33-12.562-64.758-20.12-105.97-20.12zm-.018 10.543c23.4-.08 46.826 4.167 70.074 13.005l8.77 3.334-6.67 17.542-8.77-3.336c-42.466-16.144-84.223-15.572-126.88.04l-8.814 3.226-6.448-17.623 8.81-3.223c23.152-8.473 46.527-12.883 69.928-12.964z"></path>
                                    </g>
                                </svg>
                            </div>
                            <div className="flex flex-col flex-grow ml-4">
                                <div className="text-sm text-gray-500">Sub-Race</div>
                                <div className="font-bold text-lg">{subrace}</div>
                            </div>
                        </div>
                    </div>
                    }
                    <div className="col-span-12 sm:col-span-6 md:col-span-3">
                        <div className="flex flex-row bg-white shadow-sm rounded p-4">
                            <div
                                className="flex items-center justify-center flex-shrink-0 h-12 w-12 rounded-xl bg-blue-100 text-blue-500">
                                <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                                    <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                                    <g id="SVGRepo_iconCarrier">
                                        <path
                                            d="M40.8992 19.5969L37.1832 11.5456C37.4542 11.2998 37.6712 11.0004 37.8205 10.6664C37.9697 10.3323 38.048 9.97092 38.0503 9.60505C38.048 9.01126 37.8438 8.43592 37.4711 7.97366C37.0984 7.5114 36.5794 7.18974 35.9996 7.06161C35.4198 6.93348 34.8137 7.00649 34.2809 7.26865C33.7481 7.5308 33.3204 7.96648 33.0681 8.50402L14.2818 13.2797C13.8184 12.8811 13.2277 12.6614 12.6165 12.6604C12.0862 12.6568 11.5675 12.8154 11.1299 13.1149C10.6922 13.4144 10.3566 13.8405 10.1679 14.3361C9.97926 14.8317 9.94658 15.3732 10.0743 15.8879C10.202 16.4026 10.4839 16.866 10.8824 17.2159L7.07007 25.4736L18.1492 25.4323L14.3506 17.1746C14.7554 16.8117 15.0348 16.3299 15.1489 15.7983L21.934 14.078V35.2177H21.7963L12.6303 38.0667C12.3371 38.1595 12.0808 38.3425 11.8979 38.5897C11.715 38.8368 11.6149 39.1355 11.6118 39.4429V39.5393C11.5999 39.7328 11.629 39.9266 11.6973 40.1081C11.7655 40.2895 11.8713 40.4545 12.0077 40.5923C12.1442 40.73 12.3081 40.8374 12.489 40.9073C12.6698 40.9772 12.8633 41.0082 13.0569 40.9981H34.9261C35.1185 41.008 35.3108 40.9774 35.4906 40.9083C35.6704 40.8392 35.8337 40.7331 35.9699 40.5969C36.1061 40.4606 36.2122 40.2974 36.2814 40.1175C36.3505 39.9377 36.3811 39.7454 36.3712 39.553V39.4429C36.3691 39.1372 36.271 38.8398 36.0907 38.5929C35.9104 38.3459 35.6571 38.1618 35.3665 38.0667L26.2142 35.2177H26.0628V13.1972L33.3847 11.2566L33.6599 11.5456L29.9302 19.6244C30.7538 19.6244 40.1444 19.5969 40.8992 19.5969ZM9.34094 25.4736L12.6165 18.372L15.8466 25.442L9.34094 25.4736ZM35.4904 12.7017L38.6834 19.5831H32.2561L35.4904 12.7017Z"
                                            fill="#ffffff"></path>
                                        <path fillRule="evenodd" clipRule="evenodd"
                                              d="M12.6198 30.7178C14.9518 30.7178 16.9448 29.2665 17.7449 27.2178C15.8324 27.2178 14.6113 27.2178 13.5733 27.2178C11.8323 27.2179 10.6058 27.2179 7.4948 27.2178C8.29489 29.2665 10.2879 30.7178 12.6198 30.7178ZM5.38946 27.2178C5.21373 26.5811 5.11984 25.9104 5.11984 25.2178C5.86224 25.2178 6.52404 25.2178 7.11984 25.2178C10.5178 25.2179 11.7694 25.2179 13.5851 25.2178C14.687 25.2178 15.9966 25.2178 18.1198 25.2178C18.7175 25.2178 19.3797 25.2178 20.1198 25.2178C20.1198 25.2187 20.1198 25.2196 20.1198 25.2205C20.1196 25.9121 20.0257 26.5819 19.8502 27.2178C18.975 30.389 16.0694 32.7178 12.6198 32.7178C9.17031 32.7178 6.26471 30.389 5.38946 27.2178Z"
                                              fill="#ffffff"></path>
                                        <path fillRule="evenodd" clipRule="evenodd"
                                              d="M35.0256 25.0137C37.3576 25.0137 39.3506 23.5624 40.1506 21.5137C38.2381 21.5137 37.0171 21.5137 35.979 21.5137C34.238 21.5138 33.0115 21.5138 29.9005 21.5137C30.7006 23.5624 32.6936 25.0137 35.0256 25.0137ZM27.7952 21.5137C27.6195 20.877 27.5256 20.2063 27.5256 19.5137C28.268 19.5137 28.9298 19.5137 29.5256 19.5137C32.9236 19.5138 34.1752 19.5138 35.9909 19.5137C37.0927 19.5137 38.4024 19.5137 40.5256 19.5137C41.1233 19.5137 41.7854 19.5137 42.5256 19.5137C42.5256 19.5146 42.5256 19.5155 42.5256 19.5164C42.5253 20.208 42.4315 20.8778 42.256 21.5137C41.3807 24.6849 38.4751 27.0137 35.0256 27.0137C31.576 27.0137 28.6704 24.6849 27.7952 21.5137Z"
                                              fill="#ffffff"></path>
                                    </g>
                                </svg>
                            </div>
                            <div className="flex flex-col flex-grow ml-4">
                            <div className="text-sm text-gray-500">Alignment</div>
                                <div className="font-bold text-lg">{alignment}</div>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-12 sm:col-span-6 md:col-span-3">
                        <div className="flex flex-row bg-white shadow-sm rounded p-4">
                            <div
                                className="flex items-center justify-center flex-shrink-0 h-12 w-12 rounded-xl bg-blue-100 text-blue-500">
                                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                                    <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                                    <g id="SVGRepo_iconCarrier">
                                        <path
                                            d="M5 19V6.2C5 5.0799 5 4.51984 5.21799 4.09202C5.40973 3.71569 5.71569 3.40973 6.09202 3.21799C6.51984 3 7.0799 3 8.2 3H15.8C16.9201 3 17.4802 3 17.908 3.21799C18.2843 3.40973 18.5903 3.71569 18.782 4.09202C19 4.51984 19 5.0799 19 6.2V17H7C5.89543 17 5 17.8954 5 19ZM5 19C5 20.1046 5.89543 21 7 21H19M18 17V21M15 13.5C14.7164 12.3589 13.481 11.5 12 11.5C10.519 11.5 9.28364 12.3589 9 13.5M12 7.5H12.01M13 7.5C13 8.05228 12.5523 8.5 12 8.5C11.4477 8.5 11 8.05228 11 7.5C11 6.94772 11.4477 6.5 12 6.5C12.5523 6.5 13 6.94772 13 7.5Z"
                                            stroke="#ffffff" strokeWidth="2" strokeLinecap="round"
                                            strokeLinejoin="round"></path>
                                    </g>
                                </svg>
                            </div>
                            <div className="flex flex-col flex-grow ml-4">
                                <div className="text-sm text-gray-500">Background</div>
                                <div className="font-bold text-lg">{background}</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mx-auto justify-center">
                    <div className="flex justify-center pt-2 h-20">
                        <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-white md:text-5xl lg:text-6xl">{name}</h1>
                    </div>

                    <figure className="h-80 flex justify-center items-center p">
                        <img src={`${url}`} className="object-contain max-h-full" alt="Shoes"/>
                    </figure>

                    <p className="text-center bg-white max-prose rounded-lg shadow-lg px-10 py-5 text-black">{description}</p>
                </div>
                <div
                    className="flex-grow max-w-[400px] m-10 p-5 bg-white rounded-lg overflow-hidden shadow-lg text-black">
                    <div className="col-span-12 sm:col-span-6 md:col-span-3">
                        <div className="flex flex-row bg-white shadow-sm rounded p-4">
                            <div
                                className="flex items-center justify-center flex-shrink-0 h-12 w-12 rounded-xl bg-blue-100 text-blue-500">
                                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                                    <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                                    <g id="SVGRepo_iconCarrier">
                                        <path
                                            d="M5 19V6.2C5 5.0799 5 4.51984 5.21799 4.09202C5.40973 3.71569 5.71569 3.40973 6.09202 3.21799C6.51984 3 7.0799 3 8.2 3H15.8C16.9201 3 17.4802 3 17.908 3.21799C18.2843 3.40973 18.5903 3.71569 18.782 4.09202C19 4.51984 19 5.0799 19 6.2V17H7C5.89543 17 5 17.8954 5 19ZM5 19C5 20.1046 5.89543 21 7 21H19M18 17V21M15 13.5C14.7164 12.3589 13.481 11.5 12 11.5C10.519 11.5 9.28364 12.3589 9 13.5M12 7.5H12.01M13 7.5C13 8.05228 12.5523 8.5 12 8.5C11.4477 8.5 11 8.05228 11 7.5C11 6.94772 11.4477 6.5 12 6.5C12.5523 6.5 13 6.94772 13 7.5Z"
                                            stroke="#ffffff" strokeWidth="2" strokeLinecap="round"
                                            strokeLinejoin="round"></path>
                                    </g>
                                </svg>
                            </div>
                            <div className="flex flex-col flex-grow ml-4">
                                <div className="text-sm text-gray-500">Languages</div>
                                <div className="text-md">{languages}</div>
                            </div>
                        </div>
                    </div>
                    {/*<p>abilities: {abilities}</p>*/}
                </div>
            </div>
            <div className="flex justify-center">
                <div className="flex flex-row w-100 align-center stats shadow">
                    <div className="stat place-items-center">
                        <div className="stat-title">Dexterity</div>
                        <div className="stat-value text-secondary">{dexterity}</div>
                    </div>

                    <div className="stat place-items-center">
                        <div className="stat-title">Strength</div>
                        <div className="stat-value text-secondary">{strength}</div>
                    </div>

                    <div className="stat place-items-center">
                        <div className="stat-title">Constitution</div>
                        <div className="stat-value text-secondary">{constitution}</div>
                    </div>

                    <div className="stat place-items-center">
                        <div className="stat-title">Intelligence</div>
                        <div className="stat-value text-primary">{intelligence}</div>
                    </div>

                    <div className="stat place-items-center">
                        <div className="stat-title">Wisdom</div>
                        <div className="stat-value text-primary">{wisdom}</div>
                    </div>

                    <div className="stat place-items-center">
                        <div className="stat-title">Charisma</div>
                        <div className="stat-value text-primary">{charisma}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
import { createContext, useContext, useEffect, useState } from 'react';
import { axiosReq, axiosRes  } from '../api/axiosDefaults';
import { useCurrentUser } from '../contexts/CurrentUserContext';

export const ProfileDataContext = createContext();
export const setProfileDataContext = createContext();

export const useProfileData = () => useContext(ProfileDataContext)
export const useSetProfileData = () => useContext(setProfileDataContext)

export const ProfileDataProvider = ({ children }) => {
    const [profileData, setProfileData] = useState({
        // we will use the pageProfile later!
        pageProfile: { results: [] },
        popularProfiles: { results: [] },
    });

    const currentUser = useCurrentUser();

    const handleFollow = async (clickedProfile) => {
        try {
            const { data } = await axiosRes.post(
                '/followers/', {
                    followed: clickedProfile.id
                })
        } catch(err) {
            console.log(err)
        }
    };

    useEffect(() => {
        const handleMount = async () => {
            try {
                const {data} = await axiosReq.get('/profiles/?ordering=-followers_count'
                );
                setProfileData(prevState => ({
                    ...prevState,
                    popularProfiles: data,
                }));

            } catch(err) {
                console.log(err)
            }
        };
        handleMount();
    }, [currentUser]);

    return (
        <ProfileDataContext.Provider value={profileData}>
            <setProfileDataContext.Provider value={{setProfileData, handleFollow}}>
                {children}
            </setProfileDataContext.Provider>

        </ProfileDataContext.Provider>
    );
};



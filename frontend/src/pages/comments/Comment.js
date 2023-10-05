import React from 'react'
import styles from "../../styles/Comment.module.css"
import { Media } from 'react-bootstrap'
import Avatar from '../../components/Avatar'
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import { MoreDropdown } from "../../components/MoreDropdown";

const Comment = (props) => {

  const {
    profile_id,
    profile_image,
    owner,
    updated_at,
    content,
  } = props;

  const currentUser = useCurrentUser();
  const is_owner = currentUser?.username === owner;

  return (
    <div>
        <hr />
        <Media>
            <Link to={`/profiles/${profile_id}`}>
              <Avatar src={profile_image} height={55}/>
            </Link>
            <Media.Body className="align-self-center ml-2">
                <span className={styles.Owner}>{owner}</span><span className={styles.Date}>{updated_at}</span>
                <p>
                    {content}
                </p>
            </Media.Body>
            {is_owner && (
              <MoreDropdown handleEdit={() =>{}} handleDelete={() =>{}} />
            )}

        </Media>
    </div>
  )
}

export default Comment

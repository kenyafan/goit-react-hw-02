import c from "./Profile.module.css";

const Profile = ({ name, tag, location, image, stats }) => {
  return (
    <div className={c.profileCard}>
      <div className={c.profileInfo}>
        <img
          className={c.profileAvatar}
          src={image}
          alt="User avatar"
          width="150"
        />
        <p className={c.profileName}>{name}</p>
        <p className={c.profileTag}>@{tag}</p>
        <p className={c.profileLocation}>{location}</p>
      </div>

      <ul className={c.profileStats}>
        <li className={c.profileStatsItem}>
          <span className={c.label}>Followers</span>
          <span className={c.quantity}>{stats.followers}</span>
        </li>
        <li className={c.profileStatsItem}>
          <span className={c.label}>Views</span>
          <span className={c.quantity}>{stats.views}</span>
        </li>
        <li className={c.profileStatsItem}>
          <span className={c.label}>Likes</span>
          <span className={c.quantity}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;

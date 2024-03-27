import c from "./FriendListitem.module.css";
import clsx from "clsx";

const FriendListItem = ({ avatar, name, isOnline, id }) => {
  return (
    <li key={id} className={c.item}>
      <div className={c.status}>
        <img className={c.avatar} src={avatar} alt="Avatar" width="50" />
        <p className={c.name}>{name}</p>
        <p className={clsx(c.statusText, isOnline ? c.online : c.offline)}>
          {isOnline ? "Online" : "Offline"}
        </p>
      </div>
    </li>
  );
};

export default FriendListItem;

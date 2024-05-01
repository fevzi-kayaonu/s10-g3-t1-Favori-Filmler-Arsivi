import { useDispatch } from "react-redux";
import { removeFavorite } from "../store/actions";

export default function FavMovie(props) {
  const { title, id } = props;
  const dispatch = useDispatch();

  const handleRemoveFavorite = () => {
    dispatch(removeFavorite(id));
  };
  return (
    <div className="flex p-3 pl-4 bg-white mb-2 shadow items-center group">
      <div className="pr-4 flex-1">{title}</div>
      <button
        className="px-3 py-2 block text-sm rounded bg-rose-700 text-white opacity-30 group-hover:opacity-100"
        onClick={handleRemoveFavorite}
      >
        Çıkar
      </button>
    </div>
  );
}

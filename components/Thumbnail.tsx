import Image from 'next/image';
import { baseUrl } from '../constants/movies';
import { Movie } from '../typings';
import { useRecoilState } from 'recoil';
import { modalState, movieState } from '../atoms/modalAtom';
import { DocumentData } from 'firebase/firestore';

interface Props {
  // When using firebase
  movie: Movie | DocumentData;
}

const Thumbnail = ({ movie }: Props) => {
  const [showModal, setShowModal] = useRecoilState(modalState);
  const [currentMovie, setCurrentMovie] = useRecoilState(movieState);
  //1.44

  return (
    <div className="relative h-28 min-w-[180px] cursor-pointer transition duration-200 ease-out md:h-36 md:min-w-[260px] md:hover:scale-105">
      <Image
        src={`https://image.tmdb.org/t/p/w500${
          movie?.backdrop_path || movie?.poster_path
        }`}
        alt=""
        className="rounded-sm object-cover md:rounded"
        layout="fill"
        onClick={() => {
          setCurrentMovie(movie);
          setShowModal(true);
        }}
      />
    </div>
  );
};

export default Thumbnail;

import { useForm } from 'react-hook-form';
import Modal from '../Modal/Modal';
import { MdOutlineClose } from 'react-icons/md';
import { request } from '../../api';
import { useDispatch } from 'react-redux';
import { createPlaylist } from '../../redux/slice/featureSlice';

function CreatePlaylist({ open, handleOpen }) {
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    reset,
    formState: { isValid },
  } = useForm({
    mode: 'onSubmit',
    reValidateMode: 'onBlur',
  });

  function onSubmit(data) {
    request
      .post('/playlist', data)
      .then((res) => {
        dispatch(createPlaylist(res.data));
        reset();
        handleOpen();
      })
      .catch((e) => console.log(e));
  }

  return (
    <Modal open={open} handleOpen={handleOpen}>
      <div className="w-[330px] bg-[--primary-bg] rounded-lg relative p-5">
        <button className="absolute right-3 top-3" onClick={handleOpen}>
          <MdOutlineClose className="size-6 text-[--text-primary]"></MdOutlineClose>
        </button>
        <form onSubmit={handleSubmit(onSubmit)}>
          <h1 className="text-[--text-primary] font-bold text-lg text-center mb-2.5">
            Tạo playlist mới
          </h1>
          <div>
            <input
              {...register('name', { required: true })}
              className="rounded-full h-10 px-[15px] text-sm bg-[--alpha-bg] text-[--text-primary] outline-none border border-[--border-primary] w-full"
              placeholder="Nhập tên playlist"
            ></input>
          </div>
          <div className="px-[15px] pt-5 w-full flex justify-between items-center">
            <div>
              <h3 className="text-sm font-normal text-[--text-primary] mb-[5px]">Công khai</h3>
              <h3 className="text-[12px] text-[--text-secondary] font-normal">
                Mọi người có thể nhìn thấy playlist này
              </h3>
            </div>
            <div className="h-[21px]">
              <label class="inline-flex items-center cursor-pointer">
                <input {...register('isPublic')} type="checkbox" class="sr-only peer" />
                <div class="relative w-6 h-[15px] bg-gray-500 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[1px] after:start-[1px] after:bg-white after:border-gray-300 after:border after:rounded-full after:size-[13px] after:transition-all dark:border-gray-600 peer-checked:bg-purple-700"></div>
              </label>
            </div>
          </div>
          <div className="px-[15px] pt-5 w-full flex justify-between items-center">
            <div>
              <h3 className="text-sm font-normal text-[--text-primary] mb-[5px]">
                Phát ngẫu nhiên
              </h3>
              <h3 className="text-[12px] text-[--text-secondary] font-normal">
                Luôn phát ngẫu nhiên tất cả các bài hát
              </h3>
            </div>
            <div className="h-[21px]">
              <label class="inline-flex items-center cursor-pointer">
                <input {...register('isRandomPlaying')} type="checkbox" class="sr-only peer" />
                <div class="relative w-6 h-[15px] bg-gray-500 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[1px] after:start-[1px] after:bg-white after:border-gray-300 after:border after:rounded-full after:size-[13px] after:transition-all dark:border-gray-600 peer-checked:bg-purple-700"></div>
              </label>
            </div>
          </div>
          <button
            className="bg-[--purple-primary] text-[--text-primary] text-sm block border border-[--border-primary] w-full py-2 mt-5 rounded-full"
            disabled={!isValid}
          >
            TẠO MỚI
          </button>
        </form>
      </div>
    </Modal>
  );
}

export default CreatePlaylist;

import clsx from 'clsx';
import { useEffect, useRef, useState } from 'react';
import { AiOutlineClockCircle } from 'react-icons/ai';
import { GoSearch } from 'react-icons/go';
import { PiTrendUpBold } from 'react-icons/pi';
import { VscClose } from 'react-icons/vsc';
import { useNavigate } from 'react-router-dom';

function SearchLine({ variant, children, handleClick }) {
  return (
    <div
      className="flex py-2 px-2.5 hover:bg-[--alpha-bg] hover:rounded-md items-center hover:cursor-pointer"
      onClick={handleClick}
    >
      {variant == 'sug' && <PiTrendUpBold className="size-4 mr-2.5 text-[--text-secondary]" />}
      {(variant == 'rel' || variant == null) && (
        <GoSearch className="size-4 mr-2.5 text-[--text-secondary]" />
      )}
      {variant == 'his' && (
        <AiOutlineClockCircle
          className={clsx('size-4 mr-2.5 text-[--text-secondary]', variant != null && 'font-bold')}
        />
      )}
      <span className="text-sm leading-5">{children}</span>
    </div>
  );
}

function Search() {
  const [show, setShow] = useState(false);
  const [suggestion, setSuggestion] = useState([]);
  const [result, setResult] = useState([1]);
  const [related, setRelated] = useState([]);
  const [history, setHistory] = useState();
  const inputRef = useRef();
  const [isEmpty, setEmpty] = useState(true);
  const timer = useRef();
  const navigate = useNavigate();

  function handleChange() {
    clearTimeout(timer.current);
    timer.current = setTimeout(() => {
      if (inputRef.current.value != '') {
        setEmpty(false);
        // find in localstorage a matched search

        // fetch realted keyword here
        setRelated(['hien thai', 'thai hien', 'a', 'b', 'c', 'd', 'e', 'adsf', 'adsf']);
      } else {
        setEmpty(true);
      }
    }, 300);
  }

  function removeText() {
    inputRef.current.focus();
    inputRef.current.value = '';
    setEmpty(true);
  }

  function handleRemoveHistoryResult() {
    // Call api
    setResult([]);
  }

  function handleSearchLineClick(value) {
    inputRef.current.value = value;
    inputRef.current.blur();
    setShow(false);
    navigate('/zing-chart');
  }

  const handleOutsideClick = (event) => {
    setShow(false);
  };

  const handleInsideClick = (event) => {
    event.stopPropagation();
  };

  useEffect(() => {
    // fetch suggestion here
    setSuggestion(['Taylor Swift', 'Sau lời từ khước', 'Thủy triều']);
  }, []);

  useEffect(() => {
    if (show) {
      setShow(true);
      document.addEventListener('click', handleOutsideClick);
    }
    return () => document.removeEventListener('click', handleOutsideClick);
  }, [show]);

  return (
    <form className="w-full">
      <div className="relative" onClick={handleInsideClick}>
        <div
          className={clsx(
            'flex items-center w-full h-10 rounded-[20px] bg-[--alpha-bg] mr-2',
            show && 'bg-[--primary-bg] rounded-b-none'
          )}
        >
          <button className="px-2 text-[--text-placeholder]">
            <GoSearch className="size-6" />
          </button>
          <input
            className="bg-transparent outline-none text-sm w-full placeholder:text-[--text-placeholder] text-[--search-text] peer"
            placeholder="Tìm kiếm bài hát, nghệ sĩ, lời bài hát..."
            onFocus={() => setShow(true)}
            onChange={handleChange}
            ref={inputRef}
          ></input>
          <button
            type="button"
            className="m-2 peer-[:placeholder-shown]:invisible"
            onClick={removeText}
          >
            <VscClose className="size-5"></VscClose>
          </button>
        </div>
        {show && (
          <div className="absolute top-full left-0 w-full max-h-[540px] overflow-y-scroll scrollable-container rounded-b-[20px]">
            <ul className="bg-[--primary-bg] px-2.5 py-[13px] rounded-b-[20px]">
              <h3 className="text-sm font-bold px-2.5 pb-2">Đề xuất cho bạn</h3>
              {isEmpty &&
                suggestion.map((line, index) => (
                  <SearchLine
                    key={index}
                    variant="sug"
                    handleClick={() => handleSearchLineClick(line)}
                  >
                    {line}
                  </SearchLine>
                ))}
              {!isEmpty && (
                <>
                  {history && <SearchLine variant="his">{history}</SearchLine>}
                  {related.map((line, index) => (
                    <SearchLine
                      variant="rel"
                      key={index}
                      handleClick={() => handleSearchLineClick(line)}
                    >
                      {line}
                    </SearchLine>
                  ))}
                  <SearchLine handleClick={() => handleInsideClick(inputRef.current.value)}>
                    Tìm kiếm <span className="font-bold">{'"' + inputRef.current.value + '"'}</span>
                  </SearchLine>
                </>
              )}

              {result.length != 0 && (
                <div className="border-t border-[--border-primary] mt-2.5 pt-2.5">
                  <div className="flex items-center justify-between px-2.5 pb-2">
                    <h3 className="text-sm font-bold ">
                      {isEmpty ? 'Tìm kiếm gần đây' : 'Gợi ý kết quả'}
                    </h3>
                    {isEmpty && (
                      <button
                        type="button"
                        className="text-[10px] text-[--link-text-hover]"
                        onClick={handleRemoveHistoryResult}
                      >
                        XÓA
                      </button>
                    )}
                  </div>
                  <div className="hover:bg-[--alpha-bg] hover:rounded-md">
                    <div className="flex py-2 px-2.5  items-center gap-2">
                      <img
                        className="block size-[52px]"
                        src="https://photo-resize-zmp3.zmdcdn.me/w165_r1x1_jpeg/cover/1/e/b/1/1eb192d143222801db5ce3c930c6d6dc.jpg"
                      />
                      <div>
                        <h3 className="text-sm font-medium">21</h3>
                        <h3 className="text-[--text-secondary] text-[12px] truncate">
                          <span className="leading-normal font-normal">Album • Adele</span>
                        </h3>
                      </div>
                    </div>
                  </div>
                  <div className="hover:bg-[--alpha-bg] hover:rounded-md">
                    <div className="flex py-2 px-2.5  items-center gap-2">
                      <img
                        className="block size-[52px]"
                        src="https://photo-resize-zmp3.zmdcdn.me/w165_r1x1_jpeg/cover/1/e/b/1/1eb192d143222801db5ce3c930c6d6dc.jpg"
                      />
                      <div>
                        <h3 className="text-sm font-medium">21</h3>
                        <h3 className="text-[--text-secondary] text-[12px] truncate">
                          <span className="leading-normal font-normal">Album • Adele</span>
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </ul>
          </div>
        )}
      </div>
    </form>
  );
}

export default Search;

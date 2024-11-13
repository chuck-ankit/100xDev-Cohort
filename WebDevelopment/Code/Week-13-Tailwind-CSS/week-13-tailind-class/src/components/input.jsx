// input.jsx
export const Input = ({ type, placeholder, onClick }) => {
    return (
      <span onClick={onClick} className={'rounded-2xl text-4xl px-28 py-1 text-white cursor-pointer bg-blue-200 m-8'}>
        <input type={type} placeholder={placeholder} className={'bg-blue-200 outline-none border-none '} />
      </span>
    );
  };
  
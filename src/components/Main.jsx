import bulb from "../assets/light-bulb.svg";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react';
import PropTypes from 'prop-types';

const Main = ({extractKeywords}) => {
  const [text, setText] = useState('');

  const submitText = () => {
    if (text === '') {
      toast.error('Text box cannot be empty.', {
        position: "bottom-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    } else {
      extractKeywords(text);
    }
  };

  Main.propTypes = {
    extractKeywords: PropTypes.func.isRequired,
  };

  return (
    <div className="flex justify-center items-center pt-24">
      <div className="p-8">
        {/* Image/Header text */}
        <div className="flex flex-col justify-center items-center">
          <img className="mb-8" src={bulb} width={100} />
          <h1 className="mb-6 font-semibold text-2xl">AI Keyword Extractor</h1>
          <p className="pb-4 text-xl">Paste your text below, and we will extract the keywords.</p>
        </div>
        {/* Text space/button */}
        <div className="flex flex-col">
          <textarea 
            className="rounded-lg p-2 mb-4 bg-green-200 resize-none focus:outline-none" 
            placeholder="Enter text..." 
            cols="70" 
            rows="8" 
            onChange={ (e) => setText(e.target.value)}
          >
          </textarea>
          <button className="w-full bg-green-500 rounded-lg p-2 hover:bg-green-400 text-xl" onClick={submitText}>Extract Keywords</button>
          <ToastContainer
            position="bottom-center"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"
          />
        </div>
        <div className="flex justify-center mt-6 text-sm">
          <p>Powered by Open-Ai</p>
        </div>
      </div>
    </div>
  );
};

export default Main;

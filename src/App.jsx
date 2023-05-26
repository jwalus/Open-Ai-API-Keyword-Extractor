import Main from './components/Main';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
const extractKeywords = async (text) => {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${import.meta.env.VITE_OPENAI_API_KEY}`
      },
      body: JSON.stringify({
        model: 'text-davinci-003',
        prompt: 'Extract keywords from this text. Make the first letter of each word uppercase and seperate with commas\n\n' + text + '',
        temperature: 0.5,
        max_tokens: 30,
        frequency_penalty: 0.8
      })
    };

    try {
      const response = await fetch(import.meta.env.VITE_OPENAI_API_URL, options);
      const json = await response.json();
      const data = json.choices[0].text.trim();

      toast.success(`Keywords: ${data}`, {
        position: 'bottom-center',
        autoClose: false,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'dark',
      });
    } catch (error) {
      toast.error('An error occurred while extracting keywords.', {
        position: 'bottom-center',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'dark',
      });
    }
  };

  return (
    <>
      <Main extractKeywords={extractKeywords} />
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
    </>
  );
};

export default App;
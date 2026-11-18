import { StrictMode } from 'react' 
import { createRoot } from 'react-dom/client' 
import './index.css' 
import ClickCounter from './Counter' 
import EmojiCounter from './EmojeeCounters' 
createRoot(document.getElementById('root')).render( 
<StrictMode> 
<ClickCounter/> 
<EmojiCounter pic='Love'/> 
<EmojiCounter pic='Sad'/> 
<EmojiCounter pic='Like'/> 
</StrictMode>, 
)
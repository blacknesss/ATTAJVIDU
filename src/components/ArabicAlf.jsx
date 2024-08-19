import React, { useRef, useState } from 'react';
import attention from '../img/attention.svg'
import Alif from '../sounds/Alif.mp3';
import Ba from '../sounds/Ba.mp3';
import Ta from '../sounds/Ta.mp3';
import Sa from '../sounds/Sa.mp3';
import Jim from '../sounds/Jim.mp3';
import Ha from '../sounds/Ha.mp3';
import Ho from '../sounds/Ho.mp3';
import Dal from '../sounds/Dal.mp3';
import Zal from '../sounds/Zal.mp3';
import Ro from '../sounds/Ro.mp3';
import Za from '../sounds/Za.mp3';
import Sin from '../sounds/Sin.mp3';
import Shin from '../sounds/Shin.mp3';
import Sod from '../sounds/Sod.mp3';
import Dod from '../sounds/Dod.mp3';
import To from '../sounds/To.mp3';
import Zo from '../sounds/Zo.mp3';
import Ayn from '../sounds/Ayn.mp3';
import Goyn from '../sounds/Goyn.mp3';
import Fa from '../sounds/Fa.mp3';
import Kof from '../sounds/Kof.mp3';
import Kaf from '../sounds/Kaf.mp3';
import Lam from '../sounds/Lam.mp3';
import Mim from '../sounds/Mim.mp3';
import Nun from '../sounds/Nun.mp3';
import Vav from '../sounds/Vav.mp3';
import Hha from '../sounds/Hha.mp3';
import Ya from '../sounds/Ya.mp3';


function ArabicAlf() {
  const [isTouch, setIsTouch] = useState(true)
  const currentAudioRef = useRef(null);

  const wordPlay = (word) => {
    if (currentAudioRef.current){
      currentAudioRef.current.pause();
      currentAudioRef.current.currentTime = 0;
    }

    const audio = new Audio(word);
    currentAudioRef.current = audio;
    audio.play();
  }


  return (
    <div className='arb-wrapper'>
      <div className='bg-arabic'>
        <div className='container'>
          <div className='arabic'>
            <h1>Арабский алфавит</h1>
          </div>
        </div>
      </div>

      <div className='container'>
        <div className='arabic-main'>
          <div className="arabic-attention">
            <h2 className={isTouch ? 'active' : ''}>Нажмите на букву, чтобы воспроизвести её</h2>
            <img onClick={() => setIsTouch(!isTouch)} className='attention-img' src={attention} alt="#" />
          </div>
          <table class='table'>
            <tbody>
              <tr>
                <td >
                  <p onClick={() => wordPlay(Ho)} className='isTouchP'>خ</p>
                  <p className='smallElp'>хо</p>
                </td>
                <td>
                  <p onClick={() => wordPlay(Ha)} className='isTouchP'>ح</p>
                  <p className='smallElp'>х'а</p>
                </td>
                <td>
                  <p onClick={() => wordPlay(Jim)} className='isTouchP'>ج</p>
                  <p className='smallElp'>джим</p>
                </td>
                <td>
                  <p onClick={() => wordPlay(Sa)} className='isTouchP'>ث</p>
                  <p className='smallElp'>с'а</p>
                  </td>
                <td>
                  <p onClick={() => wordPlay(Ta)} className='isTouchP'>ت</p>
                  <p className='smallElp'>та</p>
                </td>
                <td>
                  <p onClick={() => wordPlay(Ba)} className='isTouchP'>ب</p>
                  <p className='smallElp'>ба</p>
                </td>
                <td>
                  <p onClick={() => wordPlay(Alif)} className='isTouchP'>ا</p>
                  <p className='smallElp'>алиф</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p onClick={() => wordPlay(Sod)} className='isTouchP'>ص</p>
                  <p className='smallElp'>с'од</p>
                </td>
                <td>
                  <p onClick={() => wordPlay(Shin)} className='isTouchP'>ش</p>
                  <p className='smallElp'>шин</p>
                </td>
                <td>
                  <p onClick={() => wordPlay(Sin)} className='isTouchP'>س</p>
                  <p className='smallElp'>син</p>
                </td>
                <td>
                  <p onClick={() => wordPlay(Za)} className='isTouchP'>ز</p>
                  <p className='smallElp'>за</p>
                </td>
                <td>
                  <p onClick={() => wordPlay(Ro)} className='isTouchP'>ر</p>
                  <p className='smallElp'>ро</p>
                </td>
                <td>
                  <p onClick={() => wordPlay(Zal)} className='isTouchP'>ذ</p>
                  <p className='smallElp'>з'аль</p>
                </td>
                <td>
                  <p onClick={() => wordPlay(Dal)} className='isTouchP'>د</p>
                  <p className='smallElp'>даль</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p onClick={() => wordPlay(Kof)} className='isTouchP'>ق</p>
                  <p className='smallElp'>к'оф</p>
                </td>
                <td>
                  <p onClick={() => wordPlay(Fa)} className='isTouchP'>ف</p>
                  <p className='smallElp'>фа</p>
                </td>
                <td>
                  <p onClick={() => wordPlay(Goyn)} className='isTouchP'>غ</p>
                  <p className='smallElp'>г'ойн</p>
                </td>
                <td>
                  <p onClick={() => wordPlay(Ayn)} className='isTouchP'>ع</p>
                  <p className='smallElp'>'айн</p>
                </td>
                <td>
                  <p onClick={() => wordPlay(Zo)} className='isTouchP'>ظ</p>
                  <p className='smallElp'>з'о</p>
                </td>
                <td>
                  <p onClick={() => wordPlay(To)} className='isTouchP'>ط</p>
                  <p className='smallElp'>т'о</p>
                </td>
                <td>
                  <p onClick={() => wordPlay(Dod)} className='isTouchP'>ض</p>
                  <p className='smallElp'>д'од</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p onClick={() => wordPlay(Ya)} className='isTouchP'>ي</p>
                  <p className='smallElp'>йа</p>
                </td>
                <td>
                  <p onClick={() => wordPlay(Hha)} className='isTouchP'>ه</p>
                  <p className='smallElp'>ha</p>
                </td>
                <td>
                  <p onClick={() => wordPlay(Vav)} className='isTouchP'>و</p>
                  <p className='smallElp'>вав</p>
                </td>
                <td>
                  <p onClick={() => wordPlay(Nun)} className='isTouchP'>ن</p>
                  <p className='smallElp'>нун</p>
                </td>
                <td>
                  <p onClick={() => wordPlay(Mim)} className='isTouchP'>م</p>
                  <p className='smallElp'>мим</p>
                </td>
                <td>
                  <p onClick={() => wordPlay(Lam)} className='isTouchP'>ل</p>
                  <p className='smallElp'>лам</p>
                </td>
                <td>
                  <p onClick={() => wordPlay(Kaf)} className='isTouchP'>ك</p>
                  <p className='smallElp'>каф</p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default ArabicAlf;

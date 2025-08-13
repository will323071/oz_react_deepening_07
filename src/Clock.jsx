/**
 * Clock 컴포넌트
 *
 * 실시간 시계를 표시하고 사용자가 시계를 시작하거나 정지할 수 있는 React 함수형 컴포넌트입니다.
 * 시간은 "시", "분", "초"로 나뉘어 표시됩니다.
 *
 * 주요 기능:
 * - 현재 시간을 "HH:mm:ss" 형식으로 표시합니다.
 * - 시계가 실행 중일 때 매초마다 시간을 업데이트합니다.
 **/
import './Clock.css';
import { useState,useEffect} from 'react';

function Clock() {
  const [time, setTime] = useState(new Date());
  const [timerRunning, setTimerRunning] = useState(true);
  useEffect(() => {
    if (!timerRunning) {
      return;
    }
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, [timerRunning]);

  return (
    <>
     <div className="timer-container">
     RealTime Clock
     <div className={timerRunning ? 'clock' : 'stop-clock'}>{time.toLocaleTimeString('it-IT')}</div>
     <button className={timerRunning ? 'timer' : 'stop-timer'}
     onClick={() => {setTimerRunning(!timerRunning);
    }}>
    {timerRunning ? '타이머 중지' : '타이머 시작'}
    </button>
     </div>
     </>
  );
}

export default Clock;

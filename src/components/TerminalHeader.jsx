import React, { useState, useEffect } from 'react';

const TerminalHeader = () => {
  const [date, setDate] = useState('');
  
  useEffect(() => {
    // Update the date when component mounts
    const today = new Date();
    const formattedDate = today.toISOString().split('T')[0]; // YYYY-MM-DD format
    setDate(formattedDate);
    
    // Optional: Update date every minute (if needed)
    const interval = setInterval(() => {
      const today = new Date();
      const formattedDate = today.toISOString().split('T')[0];
      setDate(formattedDate);
    }, 60000);
    
    return () => clearInterval(interval);
  }, []);
  
  return (
    <div className="terminal-header">
      <div className="terminal-line">
        <span className="terminal-prompt">ml&gt;</span>
        <span className="terminal-command">session_start --user=guest --date={date}</span>
      </div>
    </div>
  );
};

export default TerminalHeader;

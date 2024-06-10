import React, { useState } from 'react';
import "./Faqs.scss";
import Navbar from '../../components/Navbar/Navbar.tsx';

export interface FaqsProps {}

const Faqs: React.FC<FaqsProps> = () => {
  const [selectedQuestion, setSelectedQuestion] = useState<number | null>(null);

  const faqs = [
    { question: "What is the purpose of this website?", answer: "This website helps you manage family tasks and events efficiently." },
    { question: "How do I add a new task?", answer: "You can add a new task by navigating to the tasks page and clicking the 'Add Task' button." },
    { question: "How can I track my progress?", answer: "Your progress can be tracked on the leaderboard, which shows points for completed tasks." },
  ];

  const toggleQuestion = (index: number) => {
    setSelectedQuestion(selectedQuestion === index ? null : index);
  };

  return (
    <div className="faqs-page">
      <Navbar />
      <div className="faqs-container">
        <h1>Frequently Asked Questions</h1>
        <div className="faqs-list">
          {faqs.map((faq, index) => (
            <div key={index} className="faq-item" onClick={() => toggleQuestion(index)}>
              <div className="faq-question">
                <h2>{faq.question}</h2>
              </div>
              <div className={`faq-answer ${selectedQuestion === index ? 'open' : ''}`}>
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faqs;

import React from 'react';
import { useState } from 'react';
import { ContentBox, InfoBox, ModalContent } from './OurFriendsInfo.styled';

const OurFriendsInfo = ({ workDays, address, email, phone }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(prevIsModalOpen => !prevIsModalOpen);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleClickOutside = e => {
    if (e.target.classList.contains('modal-backdrop')) {
      closeModal();
    }
  };

  // if (!workDays || workDays.length === 0) {
  //   return (
  //     <ContentBox>
  //       <p>Дані відсутні</p>
  //     </ContentBox>
  //   );
  // }

  return (
    <>
      <ContentBox>
        <ul>
          <li>
            <InfoBox>
              <b onClick={toggleModal}>Time</b>
              {isModalOpen && (
                <div className="modal">
                  <ModalContent>
                    {!workDays || workDays.length === 0 ? (
                      <p>Дані відсутні</p>
                    ) : (
                      <ul>
                        <li>
                          <b>Пн:</b>
                          <p>
                            {workDays[0].isOpen
                              ? `${workDays[0].from} - ${workDays[0].to}`
                              : 'Зачинено'}
                          </p>
                        </li>
                        <li>
                          <b>Вт:</b>
                          <p>
                            {workDays[1].isOpen
                              ? `${workDays[1].from} - ${workDays[1].to}`
                              : 'Зачинено'}
                          </p>
                        </li>
                        <li>
                          <b>Ср:</b>
                          <p>
                            {workDays[2].isOpen
                              ? `${workDays[2].from} - ${workDays[2].to}`
                              : 'Зачинено'}
                          </p>
                        </li>
                        <li>
                          <b>Чт:</b>
                          <p>
                            {workDays[3].isOpen
                              ? `${workDays[3].from} - ${workDays[3].to}`
                              : 'Зачинено'}
                          </p>
                        </li>
                        <li>
                          <b>Пт:</b>
                          <p>
                            {workDays[4].isOpen
                              ? `${workDays[4].from} - ${workDays[4].to}`
                              : 'Зачинено'}
                          </p>
                        </li>
                        <li>
                          <b>Сб:</b>
                          <p>
                            {workDays[5].isOpen
                              ? `${workDays[5].from} - ${workDays[5].to}`
                              : 'Зачинено'}
                          </p>
                        </li>
                        <li>
                          <b>Вс:</b>
                          <p>
                            {workDays[6].isOpen
                              ? `${workDays[6].from} - ${workDays[6].to}`
                              : 'Зачинено'}
                          </p>
                        </li>
                      </ul>
                    )}
                    {isModalOpen && (
                      <div
                        className="modal-backdrop"
                        onClick={handleClickOutside}
                      />
                    )}
                  </ModalContent>
                </div>
              )}
            </InfoBox>
          </li>

          <li>
            <InfoBox>
              <b>Address</b>
              <a href="">
                <p>{address}</p>
              </a>
            </InfoBox>
          </li>

          <li>
            <InfoBox>
              <b>Email</b>
              <a href="">
                <p>{email}</p>
              </a>
            </InfoBox>
          </li>

          <li>
            <InfoBox>
              <b>Phone</b>
              <a href="">
                <p>{phone}</p>
              </a>
            </InfoBox>
          </li>
        </ul>
      </ContentBox>
    </>
  );
};

export default OurFriendsInfo;

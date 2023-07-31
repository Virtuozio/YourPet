import React from 'react';
import { useState } from 'react';
// import { useTranslation } from 'react-i18next';
import {
  ContentBox,
  InfoBox,
  ModalContent,
  WorkTime,
} from './OurFriendsInfo.styled';

const OurFriendsInfo = ({ workDays, address, email, phone }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  // const { t } = useTranslation();

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

  return (
    <>
      <ContentBox>
        <ul>
          <li>
            <InfoBox>
              <WorkTime onClick={toggleModal}>Time</WorkTime>
              {isModalOpen && (
                <div className="modal">
                  <ModalContent>
                    {!workDays || workDays.length === 0 ? (
                      <p>Time is not available</p>
                    ) : (
                      <ul>
                        <li>
                          <b>MN:</b>
                          <p>
                            {workDays[0].isOpen
                              ? `${workDays[0].from} - ${workDays[0].to}`
                              : 'Closed'}
                          </p>
                        </li>
                        <li>
                          <b>TU:</b>
                          <p>
                            {workDays[1].isOpen
                              ? `${workDays[1].from} - ${workDays[1].to}`
                              : 'Closed'}
                          </p>
                        </li>
                        <li>
                          <b>WE:</b>
                          <p>
                            {workDays[2].isOpen
                              ? `${workDays[2].from} - ${workDays[2].to}`
                              : 'Closed'}
                          </p>
                        </li>
                        <li>
                          <b>TH:</b>
                          <p>
                            {workDays[3].isOpen
                              ? `${workDays[3].from} - ${workDays[3].to}`
                              : 'Closed'}
                          </p>
                        </li>
                        <li>
                          <b>FR:</b>
                          <p>
                            {workDays[4].isOpen
                              ? `${workDays[4].from} - ${workDays[4].to}`
                              : 'Closed'}
                          </p>
                        </li>
                        <li>
                          <b>SA:</b>
                          <p>
                            {workDays[5].isOpen
                              ? `${workDays[5].from} - ${workDays[5].to}`
                              : 'Closed'}
                          </p>
                        </li>
                        <li>
                          <b>SU:</b>
                          <p>
                            {workDays[6].isOpen
                              ? `${workDays[6].from} - ${workDays[6].to}`
                              : 'Closed'}
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
              {address ? (
                <b>
                  Address: <br />
                  <a href="https://goo.gl/maps/{address}">{address}</a>
                </b>
              ) : (
                <b>
                  Address: <br /> <p>not available</p>
                </b>
              )}
            </InfoBox>
          </li>

          <li>
            <InfoBox>
              {email ? (
                <b>
                  Email: <br />
                  <a href="mailto:{email}">{email}</a>
                </b>
              ) : (
                <b>
                  Email: <br /> <p>not available</p>
                </b>
              )}
            </InfoBox>
          </li>

          <li>
            <InfoBox>
              {phone ? (
                <b>
                  Phone: <br />
                  <a href="tel:{phone}">{phone}</a>
                </b>
              ) : (
                <b>
                  Phone: <br /> <p>not available</p>
                </b>
              )}
            </InfoBox>
          </li>
        </ul>
      </ContentBox>
    </>
  );
};

export default OurFriendsInfo;

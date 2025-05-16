import { useState } from 'react';
import YouTube from 'react-youtube';
import Modal from './Modal';
import PrimaryButton, { PrimaryButtonWithEvent } from './buttons/PrimaryButton';

export default function HowToJoin() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <PrimaryButtonWithEvent
        label="入場方法を確認する"
        onClick={openModal}
        className="mt-4"
      />

      <Modal isOpen={isModalOpen} onClose={closeModal} title="入場方法">
        <figure className="w-full aspect-video">
          <YouTube
            videoId={import.meta.env.PUBLIC_HOW_TO_JOIN_YOUTUBE_VIDEO_ID}
            opts={{
              width: '100%',
              height: '100%',
              playerVars: {
                autoplay: 0,
              },
            }}
            className="w-full h-full"
          />
        </figure>

        <div className="w-full flex flex-row justify-center">
          <PrimaryButton
            label="グループに参加する"
            href={import.meta.env.PUBLIC_VRCHAT_GROUP_URL}
            className="mt-8"
          />
        </div>

        <p className="mt-4 mb-8 px-6 text-center text-sm text-gray-600">
          当イベントに参加するには、VRChatで「Kemo in the
          dark」のグループに参加する必要があります
        </p>
      </Modal>
    </>
  );
}

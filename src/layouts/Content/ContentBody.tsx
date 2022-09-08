import { useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';
import Board from 'react-trello';
import data from './data.json';
import Modal from 'antd/lib/modal/Modal';
import Layout, { Content, Header } from 'antd/lib/layout/layout';
import Sider from 'antd/lib/layout/Sider';
import { Checkbox, Progress, Avatar, Button, Comment, Form, Input, List } from 'antd';
import moment from 'moment';

const { TextArea } = Input;

const CommentList = ({ comments }) => (
  <List
    dataSource={comments}
    header={`${comments.length} ${comments.length > 1 ? 'replies' : 'reply'}`}
    itemLayout="horizontal"
    renderItem={(props: any) => <Comment {...props} />}
  />
);

const Editor = ({ onChange, onSubmit, submitting, value }) => (
  <>
    <Form.Item>
      <TextArea rows={4} onChange={onChange} value={value} />
    </Form.Item>
    <Form.Item>
      <Button htmlType="submit" loading={submitting} onClick={onSubmit} type="primary">
        Add Comment
      </Button>
    </Form.Item>
  </>
);

const ContentBody = () => {
  //comment
  const [comments, setComments]: any = useState([]);
  const [submitting, setSubmitting] = useState(false);
  const [value, setValue] = useState('');

  const handleSubmit = () => {
    if (!value) return;
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setValue('');
      setComments([
        ...comments,
        {
          author: localStorage.getItem('name'),
          avatar: localStorage.getItem('profilePic'),
          content: <p>{value}</p>,
          datetime: moment().fromNow()
        }
      ]);
    }, 1000);
  };

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  //
  const [visible, setVisible] = useState(false);
  const list = {
    lanes: [
      {
        id: 'lane1',
        title: 'Planned Tasks',
        label: '0/2',
        cards: [
          {
            id: 'Card1',
            title: 'Write Blog',
            description: 'Can AI make memes',
            label: '30 mins',
            draggable: true
          },
          {
            id: 'Card2',
            title: 'Pay Rent',
            description: 'Transfer via NEFT',
            label: '5 mins',
            metadata: { sha: 'be312a1' }
          },
          {
            id: 'Milk',
            title: 'Buy milk',
            description: '2 Gallons of milk at the Deli store'
          }
        ]
      },
      {
        id: 'lane2',
        title: 'Completed',
        label: '0/0',
        cards: [
          {
            id: 'ok',
            title: 'Pay Rentt',
            description: 'Transfer via NEFT',
            label: '5 mins',
            metadata: { sha: 'be312a1' }
          }
        ]
      }
    ]
  };

  const [lanes, setLanes] = useState([{}]);
  const [cookies, setCookie, removeCookie] = useCookies(['name']);

  const axios = require('axios').default;
  useEffect(() => {
    axios.get('https://62d4f9825112e98e4855d13a.mockapi.io/lanes').then(function (response: any) {
      const data = response.data.map((item: { id: any; title: any; label: any; cards: any }) => ({
        id: item.id,
        title: item.title,
        label: '',
        cards: item.cards
      }));
      // setCookie('name','hi');
      // console.log(data)
      setLanes(data);
    });
  }, []);

  const cancelHandler = () => {
    setVisible(false);
  };

  function onCardClick(cardId, metadata, laneId) {
    setVisible(true);
    console.log(cardId);
  }

  function onLaneClick(laneId) {}

  function onCardAdd(card, laneId) {
    console.log();
  }

  return (
    <div className="h-[calc(100vh-148px)] ">
      <Board
        className=" h-full "
        data={{ lanes }}
        draggable
        editable
        canAddLanes={true}
        onCardAdd={onCardAdd}
        onCardClick={onCardClick}
        style={{
          backgroundColor: 'transparent'
        }}
      />

      {visible && (
        <Modal
          style={{
            minWidth: '600px',
            maxWidth: '600px',
            width: '600px'
          }}
          title="Test"
          visible={visible}
          onCancel={cancelHandler}
          footer={null}
        >
          <Layout>
            <Content
              style={{
                backgroundColor: 'white',
                margin: '0'
              }}
            >
              <div className="my-[8px]">
                <div className="flex mb-[4px]">
                  <span className="flex items-center">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 36 40"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M26.382 0C32.56 0 36 3.56 36 9.66V30.32C36 36.52 32.56 40 26.382 40H9.62C3.54 40 0 36.52 0 30.32V9.66C0 3.56 3.54 0 9.62 0H26.382ZM10.16 27.48C9.56 27.42 8.98 27.7 8.66 28.22C8.34 28.72 8.34 29.38 8.66 29.9C8.98 30.4 9.56 30.7 10.16 30.62H25.84C26.638 30.54 27.24 29.858 27.24 29.06C27.24 28.24 26.638 27.56 25.84 27.48H10.16ZM25.84 18.358H10.16C9.298 18.358 8.6 19.06 8.6 19.92C8.6 20.78 9.298 21.48 10.16 21.48H25.84C26.7 21.48 27.4 20.78 27.4 19.92C27.4 19.06 26.7 18.358 25.84 18.358ZM16.138 9.3H10.16V9.32C9.298 9.32 8.6 10.02 8.6 10.88C8.6 11.74 9.298 12.44 10.16 12.44H16.138C17 12.44 17.7 11.74 17.7 10.858C17.7 10 17 9.3 16.138 9.3Z"
                        fill="black"
                      />
                    </svg>
                  </span>
                  <p className="font-bold mx-4 flex items-center">Description</p>
                  <button className="bg-gray-200 py-[2px] px-[8px] rounded">edit</button>
                </div>
                <div>
                  <TextArea rows={4} />
                </div>
              </div>

              <div className="my-[8px] child:my-4">
                <div className="flex mb-[4px]">
                  <span className="flex items-center">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 64 64"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M52.7 31.1721C52.0012 31.1721 51.3309 31.4497 50.8368 31.9438C50.3426 32.438 50.065 33.1082 50.065 33.8071V48.484C50.065 48.9033 49.8984 49.3054 49.6019 49.6019C49.3054 49.8984 48.9033 50.065 48.484 50.065H14.756C14.3367 50.065 13.9346 49.8984 13.6381 49.6019C13.3416 49.3054 13.175 48.9033 13.175 48.484V14.756C13.175 14.3367 13.3416 13.9346 13.6381 13.6381C13.9346 13.3416 14.3367 13.175 14.756 13.175H39.9729C40.6718 13.175 41.342 12.8974 41.8362 12.4032C42.3303 11.9091 42.6079 11.2388 42.6079 10.54C42.6079 9.84116 42.3303 9.17093 41.8362 8.67677C41.342 8.18262 40.6718 7.905 39.9729 7.905H14.756C12.9411 7.91194 11.2026 8.63597 9.91928 9.91928C8.63597 11.2026 7.91194 12.9411 7.905 14.756V48.484C7.91194 50.2989 8.63597 52.0374 9.91928 53.3207C11.2026 54.604 12.9411 55.3281 14.756 55.335H48.484C50.2989 55.3281 52.0374 54.604 53.3207 53.3207C54.604 52.0374 55.3281 50.2989 55.335 48.484V33.8071C55.335 33.1082 55.0574 32.438 54.5632 31.9438C54.0691 31.4497 53.3988 31.1721 52.7 31.1721V31.1721Z"
                        fill="black"
                      />
                      <path
                        d="M28.2472 28.985C27.7527 28.5403 27.1084 28.299 26.4435 28.3096C25.7785 28.3201 25.1422 28.5817 24.6621 29.0418C24.1819 29.5019 23.8935 30.1266 23.8547 30.7905C23.8159 31.4544 24.0296 32.1084 24.4528 32.6213L30.3025 38.7608C30.5474 39.0178 30.8417 39.2226 31.1677 39.3629C31.4937 39.5033 31.8448 39.5763 32.1997 39.5777C32.5528 39.5798 32.9027 39.5108 33.2286 39.3751C33.5545 39.2393 33.8498 39.0393 34.0969 38.7872L51.9622 20.3422C52.2044 20.0931 52.3952 19.7986 52.5237 19.4758C52.6521 19.1529 52.7157 18.8079 52.7108 18.4604C52.7059 18.113 52.6326 17.7699 52.4951 17.4508C52.3576 17.1316 52.1587 16.8427 51.9095 16.6005C51.6604 16.3583 51.366 16.1675 51.0431 16.0391C50.7202 15.9106 50.3752 15.847 50.0277 15.8519C49.6803 15.8568 49.3372 15.9301 49.0181 16.0676C48.699 16.2051 48.41 16.4041 48.1678 16.6532L32.2261 33.1483L28.2472 28.985Z"
                        fill="black"
                      />
                    </svg>
                  </span>
                  <p className="font-bold mx-4 flex items-center w-full">Checklist</p>
                  <button className="bg-gray-200 py-[2px] px-[8px] rounded ">Delete</button>
                </div>
                <div>
                  <Progress percent={0} />
                </div>
                <div>
                  <Checkbox
                  // onChange={onChange}
                  >
                    ok
                  </Checkbox>
                </div>
                <div>
                  <button className="bg-gray-200 py-[2px] px-[8px] rounded ">Add an item</button>
                </div>
              </div>

              <div>
                <div className="flex mb-[4px]">
                  <span className="flex items-center">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 64 64"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.54 21.08C11.9953 21.08 13.175 19.9003 13.175 18.445C13.175 16.9897 11.9953 15.81 10.54 15.81C9.08473 15.81 7.905 16.9897 7.905 18.445C7.905 19.9003 9.08473 21.08 10.54 21.08Z"
                        fill="#231F20"
                      />
                      <path
                        d="M10.54 34.255C11.9953 34.255 13.175 33.0753 13.175 31.62C13.175 30.1647 11.9953 28.985 10.54 28.985C9.08473 28.985 7.905 30.1647 7.905 31.62C7.905 33.0753 9.08473 34.255 10.54 34.255Z"
                        fill="#231F20"
                      />
                      <path
                        d="M10.54 47.43C11.9953 47.43 13.175 46.2503 13.175 44.795C13.175 43.3397 11.9953 42.16 10.54 42.16C9.08473 42.16 7.905 43.3397 7.905 44.795C7.905 46.2503 9.08473 47.43 10.54 47.43Z"
                        fill="#231F20"
                      />
                      <path
                        d="M52.8581 28.985H20.9219C19.5539 28.985 18.445 30.0939 18.445 31.4619V31.7781C18.445 33.1461 19.5539 34.255 20.9219 34.255H52.8581C54.2261 34.255 55.335 33.1461 55.335 31.7781V31.4619C55.335 30.0939 54.2261 28.985 52.8581 28.985Z"
                        fill="#231F20"
                      />
                      <path
                        d="M52.8581 42.16H20.9219C19.5539 42.16 18.445 43.2689 18.445 44.6369V44.9531C18.445 46.3211 19.5539 47.43 20.9219 47.43H52.8581C54.2261 47.43 55.335 46.3211 55.335 44.9531V44.6369C55.335 43.2689 54.2261 42.16 52.8581 42.16Z"
                        fill="#231F20"
                      />
                      <path
                        d="M52.8581 15.81H20.9219C19.5539 15.81 18.445 16.9189 18.445 18.2869V18.6031C18.445 19.9711 19.5539 21.08 20.9219 21.08H52.8581C54.2261 21.08 55.335 19.9711 55.335 18.6031V18.2869C55.335 16.9189 54.2261 15.81 52.8581 15.81Z"
                        fill="#231F20"
                      />
                    </svg>
                  </span>
                  <p className="font-bold mx-4 flex items-center ">Activity</p>
                  <div className="w-full">
                    <button className="bg-gray-200 py-[2px] px-[8px] rounded float-right">
                      Show details
                    </button>
                  </div>
                </div>
                <div>
                  {comments.length > 0 && <CommentList comments={comments} />}
                  <Comment
                    avatar={
                      <Avatar
                        src={localStorage.getItem('profilePic')}
                        alt={localStorage.getItem('name') ?? ''}
                      />
                    }
                    content={
                      <Editor
                        onChange={handleChange}
                        onSubmit={handleSubmit}
                        submitting={submitting}
                        value={value}
                      />
                    }
                  />
                </div>
              </div>
            </Content>
          </Layout>
        </Modal>
      )}
    </div>
  );
};

export default ContentBody;

const gradientClassList = ['red_yellow', 'purple_teal', 'pink', 'green'];

const splitString = name => name.split(' ');
const getInitials = name => name.map(i => i[0]);
const formatName = nameArr =>
  nameArr.length > 1 ? `${nameArr[0]}${nameArr[1]}` : `${nameArr[0]}`;

const setAvatarName = name => formatName(getInitials(splitString(name)));

const getRandomGradient = () =>
  gradientClassList[Math.floor(Math.random() * gradientClassList.length)];

console.log(getRandomGradient());

const names = [
  'Paul Halliday',
  'Illidan Stormrage',
  'Ragnaros',
  'Arthas Menethil',
];

names.map(n => {
  const wrapper = document.createElement('div');
  wrapper.setAttribute(
    'class',
    `animated fadeInLeft avatar gradient__${getRandomGradient()}`,
  );

  const titleEl = document.createElement('h2');
  const titleText = document.createTextNode(setAvatarName(n));

  titleEl.appendChild(titleText);
  titleEl.setAttribute('class', 'avatar__name');

  wrapper.appendChild(titleEl);

  document.body.appendChild(wrapper);
});

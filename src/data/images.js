// All image sources live here in one place.
// Right now they point at Framer's CDN (framerusercontent.com).
// To use your own local copies instead:
//   1. Download each image into /src/assets/images/
//   2. Replace the URL below with: new URL('../assets/images/filename.png', import.meta.url).href
//   3. Add: import imgName from '../assets/images/filename.png' at the top,
//      and use imgName directly instead.
// Everything else in the app (pages/components) reads from this file only,
// so you never have to touch page code to swap images.

const CDN = 'https://framerusercontent.com/images/';

export const img = (path) => `${CDN}${path}`;

export const images = {
  heroUnderConstruction: img('6o9QxNOriVxdJQ0AmSr8w3iCu0.svg'),

  // classeh-games
  gamesHero: img('Ke9G0xrwBgaY5bDWEnaMXL85FZQ.png'),
  gamesFlowBefore: img('DeeysiCw3wyZVikupZ9aQkx3eE.png'),
  gamesFlowDivider: img('ndR1Ra8IyTEFVqD3r6x9xWwHrU.png'),
  gamesBefore: img('jhJb8xdrdg5x0vkjJGadQtX3pc.png'),
  gamesAfter: img('91EBCjBAA8QL72F7Zuu5AcRiB8M.png'),
  gamesFlow1: img('2QaeCqwqOaupzyWXynrNpMPNEGo.png'),
  gamesFlow2: img('Vs0g4FzQbBbpPlQbzdq7cWcuDM.png'),
  gamesFlow3: img('N2EbeWAiT9yq8p1oqjCsVG18lCQ.png'),
  gamesDiscovery1: img('eV40b9PYueHtbOpSSv8wKtM966Q.png'),
  gamesDiscovery2: img('RSm2YT3zaFjJBOVlOXdrTxizYlA.png'),
  gamesDiscovery3: img('piw1xroDsADkLF37F7RmuA8skwQ.png'),
  gamesVisualLang: img('hnzZn8iaJvI6DsIR5pU4465lOAY.png'),
  gamesDuolingo: img('bZaEPXxujLMIpMDmxyq2xsnTfws.png'),
  gamesBussuScreen: img('t9I9YKRE7Q7wojx4yD21dOyNW1g.png'),
  gamesBussuLogo: img('N9mJa9RtgA31VdN2kqXT4t5LM.webp'),
  gamesKhanScreen: img('5P4OJKhxPVo00ld0wym98ECU7U.png'),
  gamesKhanLogo: img('ZoImJxweDnOECoKM2ZjtERU6MI.webp'),
  gamesCompetitive: img('cyJH6ZWGX6XzreHGUXQN2NBRaM.png'),
  gamesSketch: img('biCTfqDK6ihy1mNmO2xKlkMxktQ.png'),
  gamesBeezie: img('P21Kr54EdcC7XqEY5bY2jZ6w.png'),
  gamesBeezieSegments: img('WNqgjqTae0EzY3HumQca0zYNRPQ.png'),
  gamesFinalBefore1: img('RaAm5HvIWVjzKv5YeDuVL2a0A.png'),
  gamesFinalAfter1: img('XlQweMdjxIAThDpVd1TnWGYd04.png'),
  gamesFinalBefore2: img('FOAheXFsjWtGSDEDNMQq8OeWaB0.png'),
  gamesFinalAfter2: img('qmPWL7tUT4oAktw9VdbIpQKeH4c.png'),
  gamesImpact: img('MCrJi7FCiu2WNpJl7KDbKG28Byo.png'),

  // ux-research
  uxHero: img('72qbXE1k7uncCG04RbMhXKtRA.png'),
  uxChat: img('lAT0fPQB6De3uMTmoHQ0MAVAgQ.png'),
  uxConfident: img('a7oaGaLyYM906jIVWGSSIHN8lM.png'),
  uxContext: img('Cj4v0j7GZzSHmlyg8Sy4IDikYNw.png'),
  uxMethodEN: img('7YuZqtFhMibhFCtPlnH8stiSy0U.jpg'),
  uxMethodFA: img('5wi8xtQp4E0Ka1nt6yiqBm4hRUY.jpg'),
  uxQuestionsA_EN: img('O6uK2C36NSm5I0IeEP8W6aHJ3As.jpg'),
  uxQuestionsA_FA: img('yucZgPmv9Zz9DysCx72rnwe2jkc.jpg'),
  uxQuestionsB_FA: img('WrAOlFgoEtaOdMlRv37UtVNJrs.jpg'),
  uxQuestionsB_EN: img('fdB5OQtGC2TcMA7Jka5yisHQa8A.jpg'),
  uxQuestionsC_FA: img('jYACKWW5RLyVjHODzJjWhb34thA.jpg'),
  uxAffinity: img('4vrr2TxU8keFgqrR9XK9mYWzY.jpg'),
  uxOpportunities: img('s93R2hJuiuocTPrjKpGoVwXqAM.png'),
  uxStudyMode: img('r00OL9ZmjteHqODIj8RUt9F696c.webp'),
  uxNotebookLM: img('nG3EuXhKJN9F39bLajipb5gszIg.png'),

  // classeh-dashboard
  dashHero: img('jSWcFIzIeNKhgXp9A3HCXPv8.png'),
  dashBefore: img('6odXRxqxzP08BsiQvmmAO5k4yic.png'),
  dashAfterStudent: img('hmBvoa6Geik3jWVT9WaKpjP7eLY.png'),
  dashAfterTeacher: img('UkU2hZRhQzhpwTvDLfSHvgAy19g.png'),
  dashAfterParent: img('zLQHHpeCxIEbYBZiuZHRSnOMiKk.png'),
  dashOldGrid: img('4fzxZkxILI00dJqLNrNk4XKJE.png'),
  dashClarity: img('3wU4FBkgkWHjWRbayC7uEM50BEI.png'),
  dashSupportNotes1: img('ya3619YYaWgr1a7qu0dxaKrraVA.png'),
  dashSupportNotes2: img('JGTTyIqEA5XExbFsMqasmAq8M68.png'),
  dashWireStudent: img('MhC70H1Y5Far6giMrIHdyWhQ.png'),
  dashWireTeacher: img('b4zTkpLw0mWjCrrBDFJJ8fz2m0U.png'),
  dashWireParent: img('jEZvlh1A0VtUiAhV0e1qVoSPw.png'),
  dashGrouping1: img('rVJWmbnbN6M6BcoK9CvlDeuOKdU.png'),
  dashGrouping2: img('4WCM3KjpXSM1qSBaHd536SWE4vc.png'),
  dashSidebarProto1: img('d3gT3obMAVLXO7Hb9G6tDJylLQ.png'),
  dashSidebarProto2: img('KKsdb6taGueHYZl8guphnwof8I.png'),
  dashSidebarAvatar: img('1fIZN61JCM0CZNl9p5jdMzr72U.png'),
  dashSidebarIconEN: img('IN1Rf3OamtxC0xNSxX63hckwgVQ.svg'),
  dashSidebarIconFA: img('4lUkhwDIBKGnzgAgXV988XWiU0.svg'),
  dashCalendarBg: img('ZrxyFmqiUnrhbtlEYm4F7iVFSBk.png'),
  dashNewIcons: img('rzS9Q6ULDV4mbm5ahVC8P92Mcus.png'),
  dashOldIcons1EN: img('ovICF0uAEkIVWIghVhzSmNga74.png'),
  dashOldIcons1FA: img('H8vke7NYl3OeYa9Rc1tVNz1iEw.png'),
  dashOldIcons2: img('TB4DrfmOItrwkVI0RhTTHkVRQ.png'),
  dashHub1: img('3hdrmC0k3qrk5sM1zKwPmzC0FA.png'),
  dashHub2: img('U7EZFsIKFJwFTW5VosEuvmWI.png'),
  dashFinalTeacher: img('9g65po7P1dtd89TNl0RYv85GDtA.png'),
  dashFinalStudent: img('xkNDyC1uV5DkXFUWY16ecsFY6c.png'),
  dashFinalParent: img('aEht3pwowiu0619Q0HBX8muI.png'),
  dashImpact1: img('5hyZ9Lsg3uewLNU36wsZWAzxAM.png'),
  dashImpact2: img('YDNwTHTXKQPCJl8N49AWlLDPq1M.png'),
};

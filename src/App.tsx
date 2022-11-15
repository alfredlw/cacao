import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonFab,
  IonFabButton,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { add, book, ellipse, help, helpBuoy, helpCircle, helpSharp, home, information, person, square, triangle } from 'ionicons/icons';
import Guide from './pages/Guide';
import Home from './pages/Home';
import Account from './pages/Account';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
/* Theme fonts */
import "./theme/fonts/stylesheet.css";
import { userInfo } from 'os';
import Start from './pages/expert';
import Expert from './pages/expert';
import Magic from './pages/magic';
import About from './pages/about';
import Step1 from './pages/step1';
import Step2 from './pages/step2';
import Step3 from './pages/step3';
import AppProvider from './context/context';
import Result from './pages/result';
import Capture from './pages/capture';
import NoResult from './pages/noResult';
import MagicResult from './pages/magicResult';

setupIonicReact();

const App: React.FC = () => (
  <AppProvider>
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>
      <Route exact path="/">
          <Redirect to="/home" />
        </Route>
        <Route exact path="/home" component={Home}/>
        <Route path="/expert" component={Expert} />
        <Route path="/magic" component={Magic} />
        <Route exact path="/guide" component={Guide}/>
        <Route path="/account" component={Account}/>
        <Route path="/about" component={About}/>
        <Route path="/step1" component={Step1}/>
        <Route path="/step2" component={Step2}/>
        <Route path="/step3" component={Step3}/>
        <Route path="/capture" component={Capture}/>
        <Route path="/result" component={Result}/>
        <Route path="/noresult" component={NoResult}/>
        <Route path="/magicresult" component={MagicResult} />
        
        {/* <IonTabs>
        <IonRouterOutlet>
          <Route exact path="/guide">
            <Tab1 />
          </Route>
          <Route exact path="/home">
            <Tab2 />
          </Route>
          <Route path="/account">
            <Tab3 />
          </Route>
          <Route exact path="/">
            <Redirect to="/home" />
          </Route>
        </IonRouterOutlet>
        <IonTabBar slot="bottom">
          <IonTabButton tab="guide" href="/guide">
            <IonIcon icon={book} />
            <IonLabel>Guide</IonLabel>
          </IonTabButton>
          <IonTabButton tab="home" href="/home">
          
            <IonIcon icon={home} />
            <IonLabel>Accueil</IonLabel>
          </IonTabButton>
          <IonTabButton tab="account" href="/account">
            <IonIcon icon={person} />
            <IonLabel>Moi</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs> */}
      </IonRouterOutlet>

    </IonReactRouter>
  </IonApp>
  </AppProvider>
);

export default App;

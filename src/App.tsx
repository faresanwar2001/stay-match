import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
  useParams,
} from "react-router-dom";
import "./App.css";
import LoginForm from "./components/features/auth/login/login-form";
import HomeLayout from "./app/layout";
import Overview from "./app/overview/page";
import Stuff from "./app/stuff/page";
import Owners from "./app/owners/page";
import Customers from "./app/customers/page";
import Wallet from "./app/wallet/page";
import Support from "./app/support/page";
import Commission from "./app/commission/page";
import OwnerDetails from "./app/owners/ownerDetails/page";
import EditOwner from "./app/edit-owner/page";
import enMessages from "./i18n/en.json";
import arMessages from "./i18n/ar.json";
import { IntlProvider } from "use-intl";
import Error from "./Error";

// Translation
const messages = {
  en: enMessages,
  ar: arMessages,
};

function LocalWrapper({ children }: { children: React.ReactNode }) {
  const { lang } = useParams();

  const locale = lang && (lang === "en" || lang === "ar") ? lang : "en";

  const direction = locale === "ar" ? "rtl" : "ltr";

  return (
    <div dir={direction} lang={lang} className="h-screen">
      <IntlProvider locale={locale} messages={messages[locale]}>
        {children}
      </IntlProvider>
    </div>
  );
}

// Routing
const routes = createBrowserRouter([
  {
    // Root path that redirects to default language
    path: "",
    element: <Navigate to="/en" replace />,
  },
  {
    path: "/:lang",
    element: (
      <LocalWrapper>
        <HomeLayout />
      </LocalWrapper>
    ),
    children: [
      {
        index: true,
        element: <Overview />,
        errorElement: <Error />,
      },
      {
        path: "stuff",
        element: <Stuff />,
        errorElement: <Error />,
      },
      {
        path: "owners",
        element: <Owners />,
        errorElement: <Error />,
      },
      {
        path: "owners/ownerDetails/:id",
        element: <OwnerDetails />,
        errorElement: <Error />,
      },
      {
        path: "ownerDetails/editOwner",
        element: <EditOwner />,
        errorElement: <Error />,
      },
      {
        path: "customers",
        element: <Customers />,
        errorElement: <Error />,
      },
      {
        path: "wallet",
        element: <Wallet />,
        errorElement: <Error />,
      },
      {
        path: "support",
        element: <Support />,
        errorElement: <Error />,
      },
      {
        path: "Commission",
        element: <Commission />,
        errorElement: <Error />,
      },
    ],
  },
  {
    path: "login",
    element: <LoginForm />,
  },
]);

export default function App() {
  return (
    <>
      <RouterProvider router={routes} />
    </>
  );
}

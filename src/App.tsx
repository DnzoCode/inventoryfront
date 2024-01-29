import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import { Panel } from "primereact/panel";
import { useState } from "react";
import AppLayout from "./Components/Global/AppLayout";
import { Provider } from "react-redux";
import store from "./Stores/Global/store";
export default function App() {
  const [visible, setVisible] = useState<boolean>(false);
  return (
    <>
      <Provider store={store}>
        <AppLayout>
          <div
            className="
              p-10
              rounded-xl
              flex flex-col
              gap-8
              max-w-3xl
            "
          >
            <h1 className="text-4xl text-black dark:text-white font-bold text-center">
              Tailwind CSS + PrimeReact
            </h1>
            <Panel header="Default Preset">
              <p>
                First panel component uses the global pass through preset from
                the Tailwind CSS based implementation of PrimeOne Design 2023.
              </p>
            </Panel>

            <Button
              label="Show"
              icon="pi pi-external-link"
              onClick={() => setVisible(true)}
            />
            <Dialog
              header="Header"
              visible={visible}
              style={{ width: "50vw" }}
              onHide={() => setVisible(false)}
            >
              <p className="m-0">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </Dialog>
          </div>
        </AppLayout>
      </Provider>
    </>
  );
}

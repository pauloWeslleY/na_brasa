import "./modal.sass";

import { Dialog } from "@base-ui/react/dialog";
import { X } from "lucide-react";
import Image from "next/image";

interface ModalProps {
  open: boolean;
  onOpen(open: boolean): void;
}

const Modal = ({ open, onOpen }: ModalProps) => (
  <Dialog.Root open={open} onOpenChange={(open) => onOpen(open)}>
    <Dialog.Portal>
      <Dialog.Backdrop className="Backdrop" />
      <Dialog.Popup className="Popup">
        <div className="Intro">
          <div className="Logo">
            <Image
              src="/images/pedir.png"
              alt="Ícone da Tela pedido online"
              width={64}
              height={64}
            />
          </div>
          <Dialog.Title className="Title">Pedido Online</Dialog.Title>
          <Dialog.Description className="Description">
            Informe os detalhes do seu pedido.
          </Dialog.Description>
        </div>

        <div className="FormFields">
          <fieldset>
            <input id="name" type="text" placeholder="Digite seu nome" />
          </fieldset>

          <fieldset>
            <textarea id="pedido" placeholder="Digite seu pedido" rows={4} />
          </fieldset>
        </div>

        <div className="Actions">
          <Dialog.Close className="Button">Close</Dialog.Close>
        </div>

        <button className="IconButtonClose" onClick={() => onOpen(false)}>
          <X />
        </button>
      </Dialog.Popup>
    </Dialog.Portal>
  </Dialog.Root>
);

export default Modal;

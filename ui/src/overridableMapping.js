import { DeliveryIcon } from './overridden/backoffice/DeliveryIcon/DeliveryIcon';
import {
  PatronMetadata,
  PatronMetadataActionMenuItem,
} from './overridden/backoffice/PatronMetadata/PatronMetadata';
import { Footer } from './overridden/components/Footer/Footer';
import {
  Logo,
  LogoMobile,
  RightMenuItem,
  RightMenuItemMobile,
} from './overridden/components/Menu';
import { DocumentRequestFormFields } from './overridden/frontsite/DocumentRequest/DocumentRequestForm';
import { NotAvailable } from './overridden/frontsite/Document/DocumentDetails/DocumentCirculation/NotAvailable';
import {
  HomeContent,
  HomeHeadline,
} from './overridden/frontsite/Home/HomeContent';
import { Slogan } from './overridden/frontsite/Home/Slogan';

export const overriddenCmps = {
  'Backoffice.PatronDetails.Metadata': PatronMetadata,
  'Backoffice.PatronDetails.Metadata.ActionMenuItem': PatronMetadataActionMenuItem,
  'Home.Headline': HomeHeadline,
  'Home.Headline.slogan': Slogan,
  'Home.content': HomeContent,
  ILSFooter: Footer,
  'ILSMenu.Logo': Logo,
  'ILSMenu.LogoMobile': LogoMobile,
  'ILSMenu.RightMenuItems': RightMenuItem,
  'ILSMenu.RightMenuItemsMobile': RightMenuItemMobile,
  'LoanListEntry.DeliveryIcon': DeliveryIcon,
  'LoanMetadata.DeliveryIcon': DeliveryIcon,
  'RequestForPatronMessage.DeliveryIcon': DeliveryIcon,
  'LoanAvailability.NotAvailable': NotAvailable,
  DocumentRequestForm: DocumentRequestFormFields,
};

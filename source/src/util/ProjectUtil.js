export function getProjectStatusText (t, status) {
  var value = null;

  switch (status) {
    case 1:
      value = t('status.sold');
      break;

    case 2:
      value = t('status.finalized');
      break;
  
    default:
      value = t('status.sale');
      break;
  }

  return value;
}

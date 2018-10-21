<?php 
	function listFolderFiles( $dir ){
    $arr = array();
		$ffs = scandir( $dir );

		foreach ( $ffs as $ff ) {
      if ( $ff != '.' && $ff != '..' ) {
        if ( is_dir($dir . '/' . $ff) ) {
          $arr[ $ff ] = array();
          $arr[$ff] = listFolderFiles( $dir . '/' . $ff );
        } else {
          array_push( $arr, $ff );
        }
      }
		}
    return $arr;
	}
  echo json_encode( listFolderFiles('webPageGmg/src/images/jpg/slider') );
?>

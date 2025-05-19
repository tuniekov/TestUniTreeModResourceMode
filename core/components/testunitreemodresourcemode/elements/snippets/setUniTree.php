<?php
$testunitreemodresourcemode = $modx->getService('testunitreemodresourcemode', 'testunitreemodresourcemode', MODX_CORE_PATH . 'components/testunitreemodresourcemode/model/', []);

$testunitreemodresourcemode->pdo->setConfig([
    'class'=>'modResource',
    'parents'=>'0',
    'showUnpublished'=>1,
    'sortby'=>[
        'id'=>'ASC',
    ],
    'return'=>'data',
    'limit'=>0,
]);

$ress = $testunitreemodresourcemode->pdo->run();
foreach($ress as $res){
    // echo '<pre>'.print_r($res,1).'</pre>';
    if($modResourceTree = $modx->newObject('modResourceTree')){
        $data = [
            // 'parent_id'=>$parent_id,
            // 'parents_ids'=>$parents_ids,
            'menuindex'=>$res['menuindex'],
            'title'=>$res['pagetitle'],
            'class'=>$res['class_key'],
            'target_id'=>$res['id'],
        ];
        $modResourceTree->fromArray($data);
        $modResourceTree->save();
    }
}

function getParents($modx,$parent_id,$parents_ids = []){
    if($modResourceTreeParent = $modx->getObject('modResourceTree',$parent_id)){
        $parents_ids[] = $parent_id;
        return getParents($modx,$modResourceTreeParent->parent_id,$parents_ids);
    }
    return $parents_ids;
}
foreach($ress as $res){
    if($modResourceTree = $modx->getObject('modResourceTree',['target_id'=>$res['id']])){
        $parent_id = 0;
        if($modResourceTreeParent = $modx->getObject('modResourceTree',['target_id'=>$res['parent']])){
            $parent_id = $modResourceTreeParent->id;
        }
        $modResourceTree->parent_id = $parent_id;
        $modResourceTree->save();
    }
}
foreach($ress as $res){
    if($modResourceTree = $modx->getObject('modResourceTree',['target_id'=>$res['id']])){
        if($modResourceTree->parent_id >0){
            $parents_ids = getParents($modx,$modResourceTree->parent_id,[]);
            echo '<pre>'.print_r($parents_ids,1).'</pre>';
            $modResourceTree->parents_ids = '#'.implode('#',array_reverse($parents_ids)).'#';
            $modResourceTree->save();
        }
    }
}
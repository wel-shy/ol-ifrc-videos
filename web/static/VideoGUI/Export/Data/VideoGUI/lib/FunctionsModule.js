var functionTree = {
	 "Output Selection": {
		"Default": (wc, no, defaultOutputID, outputIDs) => { 
	return defaultOutputID; 
},
		"storyArch": (wc, no, defaultOutputID, outputIDs) => { 
	switch (userVideo){
	    
	    case 'child':
	       return outputIDs[1]
	        break
	        
	   case 'male':
	       return outputIDs[3]
	       break
	   case 'female':
	       return outputIDs[2]
	       break
	       
	   case 'older-people':
	      return outputIDs[0]
	       break
	    
	    
	}
	    
	return defaultOutputID; 
},
		"userSelection": (wc, no, defaultOutputID, outputIDs) => { 
	$('.decision-buttons').show();

	return defaultOutputID; 
},
		"nextSteps": (wc, no, defaultOutputID, outputIDs) => { 
	switch (userNextChoice){
	    case 'flood':
	       return outputIDs[0]
	        break
	   case 'waste':
	       return outputIDs[2]
	       break
	   case 'sanitation':
	       return outputIDs[1]
	       break
	}
	return defaultOutputID; 
},
},
	 "Group Selection": {
		"Default": (groupNOs, wc) => { 
	return groupNOs[0] 
},
},
	 "Layer Selection": {
		"Default": (master, others, wc) => { 
	return [master, ...others];
},
},
	 "Interaction": {
		"Default": (wc, interact, data) => {
	switch (interact.type)
	{
		case 'start':
			break;
		case 'end':
			wc.setInteractionComplete(interact.id);
			break;
	}
},
		"showButtons": (wc, interact, data) => {
	switch (interact.type)
	{
		case 'start':
		    setVisible('user-selection', true)
			break;
		case 'end':
		    setVisible('user-selection', false)
			wc.setInteractionComplete(interact.id);
			break;
	}
},
		"showTemp": (wc, interact, data) => {
	switch (interact.type)
	{
		case 'start':
		    SetVisible('tempTimbut', true)
			break;
		case 'end':
		    SetVisible('tempTimbut', false)
			wc.setInteractionComplete(interact.id);
			break;
	}
},
		"showTempHere": (wc, interact, data) => {
	switch (interact.type)
	{
		case 'start':
		    SetVisible('tempHere', true)
			break;
		case 'end':
		    SetVisible('tempHere', false)
			wc.setInteractionComplete(interact.id);
			break;
	}
},
		"showFloodWarning": (wc, interact, data) => {
	switch (interact.type)
	{
		case 'start':
		    SetVisible('flood-risk', true)
			break;
		case 'end':
		    SetVisible('flood-risk', false)
			wc.setInteractionComplete(interact.id);
			break;
	}
},
		"text2": (wc, interact, data) => {
	switch (interact.type)
	{
		case 'start':
		    SetVisible('text-2', true)
			break;
		case 'end':
		    SetVisible('text-2', false)
			wc.setInteractionComplete(interact.id);
			break;
	}
},
		"text3": (wc, interact, data) => {
	switch (interact.type)
	{
		case 'start':
		    SetVisible('text-3', true)
			break;
		case 'end':
		    SetVisible('text-3', false)
			wc.setInteractionComplete(interact.id);
			break;
	}
},
		"text1a": (wc, interact, data) => {
	switch (interact.type)
	{
		case 'start':
		    SetVisible('text-1a', true)
			break;
		case 'end':
		    SetVisible('text-1a', false)
			wc.setInteractionComplete(interact.id);
			break;
	}
},
		"text1b": (wc, interact, data) => {
	switch (interact.type)
	{
		case 'start':
		    SetVisible('text-1b', true)
			break;
		case 'end':
		    SetVisible('text-1b', false)
			wc.setInteractionComplete(interact.id);
			break;
	}
},
},
};
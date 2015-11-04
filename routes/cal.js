/**
 * New node file
 */
exports.cal = function(req,res)
{
	ip1 = parseFloat(req.body.op1);
	ip2 = parseFloat(req.body.op2);
	var op = parseInt(req.body.op_option);
	

	
	switch(op)
	{
	case 1: result=ip1+ip2;
			flag = 1;
			op="+";
			break;
	case 2: result=ip1-ip2;
			flag = 1;
			op="-";
			break;
	case 3: result=ip1*ip2;
			flag = 1;
			op="*";
			break;
	case 4: if(ip2 !== 0 && ip2 !== "")
			{
				flag=1;
				result=(ip1/ip2).toFixed(2);
				op="/";
			}else{
				flag=0;
			}
			break;
	default: result="Invalid";
	}
	
	if(flag === 1)
	{
		res.render('index', {'title':'Node/Angular Calculator',
								'res':result,
								'ip1':ip1,
								'ip2':ip2,
								'oper':op,
								'sign':"="});
	}else{
		res.render('index', {'title':'Node/Angular Calculator',
			'res':"Invalid : Cannot divide by 0",
			'ip1':"",
			'ip2':"",
			'oper':"",
			'sign':""});
	}
};
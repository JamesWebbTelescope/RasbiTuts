from flask_restx import Namespace, Resource, fields, Model
from apis.auth import authorizations

def create_api_tutorials(db_manager):

    api: Namespace = Namespace("tutorials", description="tutorial namespace", authorizations=authorizations)

    tutorial_model: Model = api.model("Tutorials", {'name': fields.String(required=True, description="Name of the tutorial"),
                                                    'link': fields.String(required=True, description="Link for the tutorial")})
    
    @api.route("/")
    class Tutorials(Resource):

        @api.doc("Get all tutorials")
        def get(self):
            tutorials = db_manager.tutorials.GetAll()
            return tutorials
        
    return api

